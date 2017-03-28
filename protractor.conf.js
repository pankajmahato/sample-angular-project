'use strict';


// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['e2e' + '/**/*.js'],
  
  onPrepare: function () {
    global.isAngularSite = function (flag) {
      console.log('Switching to ' + (flag ? 'Asynchronous' : 'Synchronous') + ' mode.')
      browser.ignoreSynchronization = !flag;
    },
    global.BROWSER_WAIT = 5000;
  },
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000
  }
};
