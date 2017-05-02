import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    show() {
      this.$('.mdl-spinner').addClass('is-active');
    },
    
    hide() {
      this.$('.mdl-spinner').removeClass('is-active');
    }
  },
  
  didRender() {
    if (typeof window.componentHandler !== 'undefined'){
      window.componentHandler.upgradeAllRegistered();
    }
  }
});
