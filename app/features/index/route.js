import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {}); // <--- note that we now return the promise here
  },
  
  model() {
    return this.store.query('board', {orderBy: 'owner', equalTo: this.session.get('currentUser').uid});
  }
});
