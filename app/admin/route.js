import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD

=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
  model(params) {
    return this.store.findRecord('plant', params.plant_id);
  },
  actions: {
    savePlant3(params) {
      var newplant = this.store.createRecord('plant', params);
      newplant.save();
      this.transitionTo('admin1');
    },
    destroyPlant(plant){
      plant.destroyPlant();
      this.transitionTo('admin1');
    }
  }
<<<<<<< HEAD

=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
});
