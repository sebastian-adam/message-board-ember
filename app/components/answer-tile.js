import Ember from 'ember';

export default Ember.Component.extend({
  avgLiking: Ember.computed('answer.likes', 'answer.dislikes', function() {
    return this.get('answer.likes') / this.get('answer.dislikes');
  }),
});
