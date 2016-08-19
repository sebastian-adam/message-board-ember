import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveAnswer(question, answer) {
      answer.get('question').addObject(answer);
      question.get('answers').addObject(question);
      question.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', question.id);
    },
    removeAnswer(question, answer) {
      answer.get('question').removeObject(question);
      question.get('answers').removeObject(answer);
      question.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', question.id);
    }
  }
});
