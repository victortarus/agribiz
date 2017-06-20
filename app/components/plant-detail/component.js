import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   delete(plant) {
     if (confirm('Are you sure you want to delete this plant?')) {
       this.sendAction('destroyplant', plant);
     }
   }
 }
});
