/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  defaultNS: 'common',
  localeStructure: '{{lng}}/{{ns}}',
  keySeparator: '.',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
