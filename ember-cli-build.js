/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-font-awesome': {
      'includeFontFiles':false
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  
  app.import(app.bowerDirectory + '/material-design-lite/material.min.js');
  app.import(app.bowerDirectory + '/material-design-lite/material.min.css');
  app.import(app.bowerDirectory + '/dialog-polyfill/dialog-polyfill.css');
  app.import(app.bowerDirectory + '/dialog-polyfill/dialog-polyfill.js');
  
  return app.toTree([]);
};
