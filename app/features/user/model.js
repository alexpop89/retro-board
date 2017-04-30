import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  boards: DS.hasMany('board'),
  cards: DS.hasMany('card')
});
