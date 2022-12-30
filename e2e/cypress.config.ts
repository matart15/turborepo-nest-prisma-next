import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: 'darxah',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('before:browser:launch', (browser: any = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args

        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage')
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
      })
      return config
    },
  },
})
