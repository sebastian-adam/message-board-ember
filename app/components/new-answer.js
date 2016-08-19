import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        date: this.get('date')
      };
      if (params.content !== undefined && params.author !== undefined && params.date !== undefined) {
        this.sendAction('saveAnswer', params);
        this.set('content', '');
        this.set('author', '');
        this.set('date', '');
      } else {
        alert('Please fill out all fields.');
      }
    },
    cancelSaveAnswer(){
      this.set('content', '');
      this.set('author', '');
      this.set('date', '');
    }
  }
});
