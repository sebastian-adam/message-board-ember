import Ember from 'ember';

export default Ember.Component.extend({
  answerIsHidden: true,
  avgLiking: Ember.computed('answer.likes', 'answer.dislikes', function() {
    var score = this.get('answer.likes') / this.get('answer.dislikes');
    if (score && isFinite(score)) {
      return score;
    } else if (score) {
      return 1;
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
    },
    showAnswer(){
      this.set('answerIsHidden', false);
    }
  }
});
