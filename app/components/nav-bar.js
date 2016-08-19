import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionRequest: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestionRequest', true);
    }
  }
});
