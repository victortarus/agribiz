import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
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
=======
>>>>>>> 778a656db0fbc00ec5d3d899d9a79024307a69b8
});
