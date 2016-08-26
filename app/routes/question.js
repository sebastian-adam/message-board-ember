import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(newAnswer);
      console.log(question);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
       return question.save();
      });
      this.transitionTo('question', question.id);
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    },
    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions)
         .then(function() {
         return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    like(answer, question) {
      console.log(answer);
      var currentLikes = answer.get('likes');
      var totalLikes = currentLikes += 1;
      answer.set('likes', totalLikes);
      this.transitionTo('question', question.id);
    }
  }
});
