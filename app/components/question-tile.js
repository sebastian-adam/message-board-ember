import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    like(answer, question) {
      this.sendAction('like', answer, question);
    },
    dislike(answer) {
      this.sendAction('dislike', answer);
    }
  }
});
