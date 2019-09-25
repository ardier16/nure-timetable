// The app is configured via environment variables in .env files
// Use prefix "VUE_APP_" for config lines.

const config = {}

Object.keys(process.env).forEach(varName => {
  if (varName.startsWith('VUE_APP')) {
    const key = varName.replace('VUE_APP_', '')
    config[key] = process.env[varName]
  }
})

export { config }
