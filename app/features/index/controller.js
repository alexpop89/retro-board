import Ember from 'ember';
import cleanUrl from '../../utils/clean-url-util'

export default Ember.Controller.extend({
  actions: {
    createBoard(boardName) {
      let boardUrl = cleanUrl(boardName);
      let board = this.store.createRecord('board', {
        title: boardName,
        titleURL: boardUrl
      });
      
      board.save();
    }
  }
});
