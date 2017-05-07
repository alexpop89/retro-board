import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // this.get("session").fetch().then(() => {
    //   return this.store.query('board', {orderBy: 'owner', equalTo: this.session.get('currentUser').uid});
    // });
  }
});
