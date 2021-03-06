/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    'modulePrefix': 'retro-board',
    'podModulePrefix': 'retro-board/features',
    'environment': environment,
    'rootURL': '/',
    'locationType': 'auto',
    'ember-cli-string-helpers': {
      'only': ['lowercase'],
    },
    'firebase': {
      'apiKey': "AIzaSyDNROFd6NLD1t4_vFeJZbTGKPQuVCu_EeQ",
      'authDomain': "retro-board-a78a4.firebaseapp.com",
      'databaseURL': "https://retro-board-a78a4.firebaseio.com",
      'projectId': "retro-board-a78a4",
      'storageBucket': "retro-board-a78a4.appspot.com",
      'messagingSenderId': "438719506292"
    },
    'torii': {
      'sessionServiceName': 'session'
    },
    'EmberENV': {
      'FEATURES': {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      'EXTEND_PROTOTYPES': {
        // Prevent Ember Data from overriding Date.parse.
        'Date': false
      }
    },

    'APP': {
      title: 'Retro-Board'
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
