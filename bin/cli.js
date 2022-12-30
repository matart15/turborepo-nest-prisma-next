const { execSync } = require('child_process')
const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Filed to execute ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2]

const gitCheckoutCommand = `git clone --depth 1 https://github.com/matart15/turborepo-nest-prisma-next.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`🔄 Cloning the repository with name ${repoName}`)

const gitCheckout = runCommand(gitCheckoutCommand)
if (!gitCheckout) process.exit(-1)

const installedDeps = runCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)

console.log(`Congratulations! You are ready. Follow the following command to start`)
console.log(`cd ${repoName} && npm start`)