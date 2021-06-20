const username = "test";
const password = "test-password";

exports.config = {

  seleniumAddress: `https://${username}:${password}@my-cluster.cloud.aerokube.com/wd/hub`,
  maxSessions: 2,

  capabilities: {
    'browserName': 'chrome',
    'browserVersion': '91.0'
  },

  specs: [
    'example_spec.js'
  ]

};
