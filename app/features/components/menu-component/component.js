import Ember from 'ember';
import fixMaterial from '../../../utils/get-or-create-user-util';

export default Ember.Component.extend({
  didRender() {
    fixMaterial();
  }
});
