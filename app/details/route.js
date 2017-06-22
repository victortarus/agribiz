import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=' + params.food;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
