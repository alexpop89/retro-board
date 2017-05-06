import Ember from 'ember';
import fixMaterial from '../../utils/fix-material';

export default Ember.Controller.extend({
  actions: {
    deleteCard(card) {
      this.model.get('cards').removeObject(card);
      this.model.save();
    },
    
    addCard(columnName, board) {
      let card = this.store.createRecord('card', {
        text: '',
        columnName: columnName
      });
      
      board.get('cards').pushObject(card);
      card.save();
      Ember.run.next(null, fixMaterial);
    }
  }
});
