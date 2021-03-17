const pwa = require("./wdio.conf.default").pwa

exports.config = Object.assign(pwa, {
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  services: ["chromedriver"],
  sync: true,
});
