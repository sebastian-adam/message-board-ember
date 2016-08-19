import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  note: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
