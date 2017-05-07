import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleURL: DS.attr('string'),
  owner: DS.attr('string'),
  date: DS.attr('string'),
  cards: DS.hasMany('card'),
  viewersNumber: DS.attr('number'),
  columns: DS.attr('', {
    defaultValue() { return ['Start Doing', 'Stop Doing', 'Continue Doing'] }
  }),
  _deleted: DS.attr('boolean', {
    defaultValue() {return false}
  })
});
