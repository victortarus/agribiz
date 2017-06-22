import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('plant');
  },
  actions: {
    saveplant3(params) {
      var newplant = this.store.createRecord('plant', params);
      newplant.save();
      this.transitionTo('adminplant');
    }
  }
});
