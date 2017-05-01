import Ember from 'ember';
import cleanUrl from '../../utils/clean-url-util'

export default Ember.Controller.extend({
  actions: {
    createBoard(boardName) {
      let boardUrl = cleanUrl(boardName);
      let board = this.store.createRecord('board', {
        title: boardName,
        titleURL: boardUrl,
        date: new Date().toISOString()
      });
      
      board.save().then(() => {
        this.transitionToRoute('board', board.get('titleURL'), board.get('id'));
      }).catch((error) => {
        window.console.error(error);
      });
    }
  }
});
