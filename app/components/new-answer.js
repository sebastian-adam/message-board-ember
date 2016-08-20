import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      var params = {
        content: this.get('answer-content'),
        author: this.get('answer-author'),
        date: this.get('answer-date')
      };
      if (params.content !== undefined && params.author !== undefined && params.date !== undefined) {
        console.log(params.content);
        console.log(params.author);
        console.log(params.date);
        this.sendAction('saveAnswer', params);
        this.set('answer-content', '');
        this.set('answer-author', '');
        this.set('answer-date', '');
      } else {
        alert('Please fill out all fields.');
      }
    },
    cancelSaveAnswer(){
      this.set('answer-content', '');
      this.set('answer-author', '');
      this.set('answer-date', '');
    }
  }
});
