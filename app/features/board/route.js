import Ember from 'ember';
import fixMaterial from '../../utils/fix-material';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord('board', param.boardId).then((board) => {
      this.store.query('card', {orderBy: 'board', equalTo: board.get('id')}).then(cards => {
        board.get('cards').pushObjects(cards);
      });
      return board;
    });
  }
});
