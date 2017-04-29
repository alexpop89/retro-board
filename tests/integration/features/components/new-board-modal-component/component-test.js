import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-board-modal-component', 'Integration | Component | new board modal component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-board-modal-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-board-modal-component}}
      template block text
    {{/new-board-modal-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
