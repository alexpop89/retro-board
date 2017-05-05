import Ember from 'ember';
import fixMaterial from '../../../utils/clean-url-util';

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
    fixMaterial();
  }
});
