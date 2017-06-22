import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    weatherLookup() {
      var params = {
      location  : this.get('location')
      };
      this.sendAction('weatherLookup', params);
    }
  }
});
