import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newBoardModal() {
      this.$('.mdl-dialog')[0].showModal();
    },
    
    createBoard() {
    
    },
    
    close() {
      this.$('.mdl-dialog')[0].close();
    }
  }
});
