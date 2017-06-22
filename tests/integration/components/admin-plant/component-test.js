import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-plant', 'Integration | Component | admin plant', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-plant}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-plant}}
      template block text
    {{/admin-plant}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
