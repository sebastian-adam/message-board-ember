import Ember from 'ember';

export default Ember.Component.extend({
  avgLiking: Ember.computed('answer.likes', 'answer.dislikes', function() {
    var score = this.get('answer.likes') / this.get('answer.dislikes');
    if (score && isFinite(score)) {
      return score;
    } else {
      return 0;
    }
  }),
  actions: {
    like(answer, question) {
      this.sendAction('like', answer, question);
    },
    dislike(answer, question) {
      this.sendAction('dislike', answer, question);
    }
  }
});
