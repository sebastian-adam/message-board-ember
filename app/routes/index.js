import Ember from 'ember';

export default Ember.Route.extend({
  questionFormRevealed: false,
  model() {
    return this.store.findAll('question');
  },
  actions: {
    showQuestionForm() {
      this.set('questionFormRevealed', true);
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
