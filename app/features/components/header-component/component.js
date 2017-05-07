import Ember from 'ember';
import config from '../../../config/environment';
import fixMaterial from '../../../utils/fix-material';
import signIn from '../../../utils/sign-in';

const {RSVP: {Promise}} = Ember;

export default Ember.Component.extend({
  appTitle: config.APP.title,
  userName: '',
  
  didRender() {
    fixMaterial();
    this._signInUser().then(this._showAuthenticationSnackbar.bind(this));
  },
  
  _signInUser() {
    return new Promise((resolve, reject) => {
      this.get("session").fetch().then(() => {
        this.get('session').get('isAuthenticated') ? resolve() : signIn().anonymous(this.get('session')).then(resolve).catch(reject);
      }).catch(() => {
        signIn().anonymous(this.get('session')).then(resolve).catch(reject);
      });
    });
  },
  
  _showAuthenticationSnackbar() {
    this.userName = this.session.get('currentUser').isAnonymous ? 'Anonoymous' : 'I dunno';
    this.$('#signed-in-snackbar')[0].MaterialSnackbar.showSnackbar({
      message: `Signed in as ${this.userName}`,
      timeout: 2000
    });
  }
});
