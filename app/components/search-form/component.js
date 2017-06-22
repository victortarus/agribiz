import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    plantLookup() {
      var params = {
      food  : this.get('food')
      };
      this.sendAction('plantLookup', params);
    },
    detailsLookup() {
      var params = {
      food  : this.get('food')
      };
      this.sendAction('detailsLookup', params);
    }
  }
});
