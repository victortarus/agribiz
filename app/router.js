import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('contact');
  this.route('about');
  this.route('subscribe');
  this.route('seasons');
  this.route('plant', {path: '/plant/:plant_id'});
  this.route('admin', {path:'/admin/:plant_id'});
  this.route('admin1');

});

export default Router;
