import DS from 'ember-data';

export default DS.Model.extend({
  alias: DS.attr(),
  image: DS.attr(),
  image2: DS.attr(),
  image3: DS.attr(),
  soil: DS.attr(),
  climate: DS.attr(),
  fertilizers: DS.attr(),
  pests: DS.attr(),
  markets: DS.attr(),

});
