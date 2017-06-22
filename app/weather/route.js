import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url ='api.openweathermap.org/data/2.5/forecast/daily?q=' + params.location + '&mode=xml&units=metric&cnt=7'
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
