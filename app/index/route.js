import Ember from 'ember';
export default Ember.Route.extend({
  model(){
    return this.store.findAll('plant')
  },
  actions: {
    plantLookup(params) {
      this.transitionTo('results', params.food);
    },
    detailsLookup(params) {
      this.transitionTo('details', params.food);
    },
    weatherLookup(params) {
      this.transitionTo('weather', params.location);
    }
  }
});
