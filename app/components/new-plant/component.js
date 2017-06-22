import Ember from 'ember';

export default Ember.Component.extend({
  addNewPlant: false,
  actions:{
   plantFormShow(){
     this.set('addNewPlant', true);
   },
   plantFormHide(){
     this.set('addNewPlant', false);
   },
   savePlant1(){
     var params ={

       alias: this.get('alias'),
         image: this.get('image'),
         image2:this.get('image2'),
         image3:this.get('image3'),
         soil: this.get('soil'),
         climate: this.get('climate'),
         fertilizers: this.get('fertilizers'),
         pests: this.get('pests'),
         markets: this.get('markets'),

     };
     this.set('addNewPlant', false);
     this.sendAction('savePlant2', params)
   }
 }
});
