import DS from 'ember-data';

export default DS.Model.extend({
  board: DS.belongsTo('board'),
  text: DS.attr('string'),
  columnName: DS.attr('string')
});
