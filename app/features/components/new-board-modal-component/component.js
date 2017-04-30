import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newBoardModal() {
      if (!this.$('.mdl-dialog')[0].showModal) {
        window.dialogPolyfill.registerDialog(this.$('.mdl-dialog')[0]);
      }
      this.$('.mdl-dialog')[0].showModal();
    },
    
    createBoard() {
    
    },
    
    close() {
      this.$('.mdl-dialog')[0].close();
    }
  }
});
