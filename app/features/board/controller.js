import Ember from 'ember';
import fixMaterial from '../../utils/fix-material';

export default Ember.Controller.extend({
  actions: {
    addCard(columnName, board) {
      let card = this.store.createRecord('card', {
        text: 'Test card here',
        columnName: columnName
      });
      
      board.get('cards').pushObject(card);
      card.save();
      Ember.run.next(null, fixMaterial);
    }
  }
});
