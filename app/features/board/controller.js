import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCard(columnName, board) {
      let card = this.store.createRecord('card', {
        text: 'Test card here',
        columnName: columnName
      });
      
      board.get('cards').pushObject(card);
      card.save();
    }
  }
});
