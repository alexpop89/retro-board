import Ember from 'ember';
import fixMaterial from '../../../utils/fix-material';

export default Ember.Component.extend({
  didRender() {
    fixMaterial();
  },
  
  actions: {
    newBoardModal() {
      fixMaterial();
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
