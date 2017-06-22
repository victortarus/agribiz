import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('contact');
  this.route('about');
  this.route('subscribe');
  this.route('seasons');
  this.route('plant', {path: '/plant/:plant_id'});
  this.route('admin', {path:'/admin/:plant_id'});
  this.route('admin1');
=======
  this.route('results', {path: 'results/:food'});
  this.route('about');
  this.route('admin');
  this.route('signup');
  this.route('weather', {path: 'weather/:location'});
  this.route('details', {path: 'details/:food'} );
  this.route('contact');
>>>>>>> 778a656db0fbc00ec5d3d899d9a79024307a69b8
});

export default Router;
