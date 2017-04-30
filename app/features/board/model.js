import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  title: DS.attr('string'),
  titleURL: DS.attr('string'),
  user: DS.belongsTo('user'),
  date: DS.attr('date'),
  cards: DS.hasMany('card')
});
