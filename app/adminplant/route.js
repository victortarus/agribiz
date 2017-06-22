import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('plant', params.plant_id);
  },
  actions: {
    saveplant3(params) {
      var newplant = this.store.createRecord('plant', params);
      newplant.save();
      this.transitionTo('adminplant');
    }
  }
});
