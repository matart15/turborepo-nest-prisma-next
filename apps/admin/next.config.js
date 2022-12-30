// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui'])
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = withTM({
  reactStrictMode: true,
  // .next/standaloneに実行に必要なすべてのファイルを吐き出す。
  // https://nextjs.org/docs/advanced-features/output-file-tracing
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
})
