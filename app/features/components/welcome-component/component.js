import Ember from 'ember';
import fixMaterial from '../../../utils/fix-material';

export default Ember.Component.extend({
  didRender() {
    fixMaterial();
  }
});
