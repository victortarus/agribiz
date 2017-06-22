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
  this.route('admin');
  this.route('adminplant', {path: 'adminplant/:plant_id'});
});

export default Router;
