import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { AcceptLanguageResolver, HeaderResolver, I18nModule } from 'nestjs-i18n'
import { LoggerModule } from 'nestjs-pino'
import { PrismaModule } from 'nestjs-prisma'
import { RequestContextModule } from 'nestjs-request-context'
import * as path from 'path'

import { AppResolver } from './app.resolver'
import { ContextInterceptor } from './libs/application/context/ContextInterceptor'
import { ExceptionInterceptor } from './libs/application/interceptors/exception.interceptor'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
]

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: './graphql/schema.gql',
      sortSchema: true,
      introspection: true,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      fallbacks: {
        'ja-*': 'ja',
        'en-*': 'en',
      },
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: HeaderResolver, options: ['locale'] }, AcceptLanguageResolver],
    }),
    LoggerModule.forRoot({
      // TODO: 本番環境ではSessionTokenを標準出力に出さないようにする。
      pinoHttp: {
        level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
      },
    }),
    AuthModule,
    UsersModule,
    RequestContextModule,

    // ここから新しいmoduleを作成
  ],
  controllers: [],
  providers: [AppResolver, ...interceptors],
})
export class AppModule {}
