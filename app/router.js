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
=======
  this.route('results', {path: 'results/:food'});
  this.route('about');
  this.route('admin');
  this.route('signup');
  this.route('weather', {path: 'weather/:location'});
  this.route('details', {path: 'details/:food'} );
  this.route('contact');
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
  this.route('subscribe');
  this.route('seasons');
  this.route('plant', {path: '/plant/:plant_id'});
  this.route('admin', {path:'/admin/:plant_id'});
  this.route('admin1');
<<<<<<< HEAD

=======
>>>>>>> e9efdf5678cf68a12dfe841224bae71b0c63b86d
});

export default Router;
