import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url ='http://api.openweathermap.org/data/2.5/forecast?q='+ params.location +'us&mode=json&appid='+ 'd91ff64b66b4afe01842decf144e5a85'
   return Ember.$.getJSON(url).then(function(responseJSON) {
     for(i=0; i<response.list.length; i++){
       	for (x=0; x<response.list[i].weather.length;x++){
       		var current = response.list[i].weather[x]
       		console.log(response.list[i].weather[x])

       		console.log(current.description,current.weather)
       		console.log(response.list[i])
       	}
       	console.log(response.list[i].weather)
       }
   });
  }
});
