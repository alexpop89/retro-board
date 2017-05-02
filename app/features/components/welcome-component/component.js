import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    if (typeof window.componentHandler !== 'undefined'){
      window.componentHandler.upgradeAllRegistered();
    }
  }
});
