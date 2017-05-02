import Ember from 'ember';

export default Ember.Component.extend({
  close() {
    debugger;
  },
  
  didRender() {
    if (typeof window.componentHandler !== 'undefined'){
      window.componentHandler.upgradeAllRegistered();
    }
  },
  
  actions: {
    newBoardModal() {
      if (!this.$('.mdl-dialog')[0].showModal) {
        window.dialogPolyfill.registerDialog(this.$('.mdl-dialog')[0]);
      }
      
      this.$('.mdl-dialog')[0].showModal();
    },
    
    createBoard() {
      this.sendAction('createBoard', this.$('#board-name').val().trim());
      this.$('.mdl-dialog')[0].close();
    },
    
    close() {
      this.$('.mdl-dialog')[0].close();
    }
  }
});
