import Ember from 'ember';
import cleanUrl from '../../utils/clean-url-util'

export default Ember.Controller.extend({
  actions: {
    createBoard(boardName) {
      let boardUrl = cleanUrl(boardName);
      let board = this.store.createRecord('board', {
        title: boardName,
        owner: this.session.get('currentUser').uid,
        titleURL: boardUrl,
        date: new Date().toISOString(),
        viewersNumber: 0
      });
      
      board.save().then(() => {
        this.transitionToRoute('board', board.get('titleURL'), board.get('id'));
      }).catch((error) => {
        window.console.error(error);
      });
    }
  }
});
