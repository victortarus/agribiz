import Ember from 'ember';

<<<<<<< HEAD
export default Ember.Route.extend({
  model(){
    return this.store.findAll('plant')
  },
=======

export default Ember.Route.extend({
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
>>>>>>> 778a656db0fbc00ec5d3d899d9a79024307a69b8
});
