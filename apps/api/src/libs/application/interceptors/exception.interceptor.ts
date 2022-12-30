import { ExceptionBase } from '@libs/exceptions'
import { CallHandler, ExecutionContext, Logger, NestInterceptor } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { RequestContextService } from '../context/AppRequestContext'

export class ExceptionInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(ExceptionInterceptor.name)

  intercept(_context: ExecutionContext, next: CallHandler): Observable<ExceptionBase> {
    return next.handle().pipe(
      catchError(err => {
        // Logging for debugging purposes
        if (err.status >= 400 && err.status < 500) {
          this.logger.debug(`[${RequestContextService.getRequestId()}] ${err.message}`)
        }

        this.logger.error(JSON.stringify(err))
        // Adding request ID to error message
        if (!err.correlationId) {
          err.correlationId = RequestContextService.getRequestId()
        }

        if (err.response) {
          err.response.correlationId = err.correlationId
        }

        // TODO: 本番環境ではエラーレスポンスにスタックトレースを含まないようにする。

        return throwError(err)
      }),
    )
  }
}
