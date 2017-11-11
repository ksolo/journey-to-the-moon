import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('project-card', 'Integration | Component | project card', {
  integration: true
});

test('it renders the project image', function(assert) {
  const project = Ember.Object.create({
    name: 'Apollo',
    logoURL: 'http://placekitten.com/200/300'
  });

  this.set('project', project);
  this.render(hbs`{{project-card project=project}}`);

  assert.equal(
    this.$('.card-image img').attr('src'),
    'http://placekitten.com/200/300',
    'images should matched');
});

test('it renders the project name', function(assert) {
  const project = Ember.Object.create({
    name: 'Apollo',
    logoURL: 'http://placekitten.com/200/300'
  });

  this.set('project', project);
  this.render(hbs`{{project-card project=project}}`);

  assert.equal(
    this.$('.card-action a').text().trim(),
    'Apollo',
    'should show the name of the project in the action section'
  )
});
