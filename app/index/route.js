import Ember from 'ember';
<<<<<<< HEAD


=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
export default Ember.Route.extend({
  model(){
    return this.store.findAll('plant')
  },
<<<<<<< HEAD



=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
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
<<<<<<< HEAD

=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
});
