import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    addToFavorites(question) {
      this.get('favoritesList').saveToFavorites(question);
    }
  }
});
