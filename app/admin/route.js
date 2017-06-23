import Ember from 'ember';

export default Ember.Route.extend({
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
      plant.destroyRecord();
      this.transitionTo('admin1');
    }
  }
});
