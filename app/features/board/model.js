import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  title: DS.attr('string'),
  titleURL: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('string'),
  cards: DS.hasMany('card'),
  viewersNumber: DS.attr('number'),
  columns: DS.attr('', {
    defaultValue() { return ['Start Doing', 'Stop Doing', 'Continue Doing'] }
  })
});
