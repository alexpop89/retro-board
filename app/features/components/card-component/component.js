import Ember from 'ember';
import fixMaterial from '../../../utils/fix-material';

export default Ember.Component.extend({
  didRender() {
    fixMaterial();
  },
  
  actions: {
    toggleEditing() {
      this.card.toggleProperty('editing');
      this.card.save().then(() => {
        fixMaterial();
      });
    },
    
    delete() {
      this.sendAction('deleteCard', this.card);
      this.card.set('_deleted', true);
      this.card.deleteRecord();
      this.card.save();
    }
  },
  
  isLocked: Ember.computed('card.editing', function() {
    return !this.card.get('editing');
  }),
});
