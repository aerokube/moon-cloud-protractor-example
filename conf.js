const username = process.env.BROWSERS_USERNAME;
const password = process.env.BROWSERS_PASSWORD;

if (!username) {
    console.log("Browsers username not specified")
    process.exit(1)
}
if (!password) {
    console.log("Browsers password not specified")
    process.exit(1)
}

exports.config = {

  seleniumAddress: `https://${username}:${password}@browsers.aerokube.com:4444/wd/hub`,
  maxSessions: 2,

  capabilities: {
    'browserName': 'MicrosoftEdge'
  },

  specs: [
    'example_spec.js'
  ]

};
