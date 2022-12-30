import { Query, Resolver } from '@nestjs/graphql'
import { I18n, I18nContext } from 'nestjs-i18n'

@Resolver()
export class AppResolver {
  @Query(() => String)
  async sayHello(@I18n() i18n: I18nContext) {
    return await i18n.t('common.Hello')
  }
}
