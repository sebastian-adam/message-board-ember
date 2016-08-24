import Ember from 'ember';

export default Ember.Route.extend({
  newQuestionRequest: false,
  actions: {
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    }
  }
});
