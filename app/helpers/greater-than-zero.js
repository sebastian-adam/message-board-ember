import Ember from 'ember';

const greaterThanZero = (params) => params[0] >= 0;

export default Ember.Helper.helper(greaterThanZero);
