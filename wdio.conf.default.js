const expect = require("chai").expect;

const config = {
  runner: "local",
  framework: "mocha",
  reporters: ["spec"],
  maxInstances: 10,
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  coloredLogs: true,
  deprecationWarnings: true,
  mochaOpts: {
    ui: "bdd",
    timeout: 1800000,
  },
  before: function (capabilities, specs) {
    global.expect = expect;
  },
};

// let ios = Object.assign();
// let iosSim = Object.assign();
// let android = Object.assign();
// let androidSim = Object.assign();

let pwa = Object.assign(
  {
    specs: ["./test/specs/**/*.js"],
    exclude: [
      // 'path/to/excluded/files'
    ],
  },
  config
);

// let pwaIos = Object.assign();
// let pwaAndroid = Object.assign();

module.exports = {
  pwa,
};
