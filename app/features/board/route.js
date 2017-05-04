import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord('board', param.boardId).then((board) => {
      this.store.query('card', {filter: {board: board.get('id')}}).then(cards => {
        board.get('cards').pushObjects(cards);
      });
      return board;
    });
  }
});
