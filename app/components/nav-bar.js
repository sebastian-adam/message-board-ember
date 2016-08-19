import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionRequest: false,
  actions: {
    showQuestionForm() {
      this.toggleProperty('newQuestionRequest');
    },
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    }
  }
});
