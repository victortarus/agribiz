import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('plant')
  },
  actions: {
    savePlant3(params) {
      var newplant = this.store.createRecord('plant', params);
      newplant.save();
    },
    destroyPlant(plant){
      plant.destroyPlant();
    }
  }
});
