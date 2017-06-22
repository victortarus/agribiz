import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?search=' + params.food;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON.results;
   });
 },
});
