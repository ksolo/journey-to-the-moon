import { test } from 'qunit';
import moduleForAcceptance from 'moon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage content');

test('homepage visit redirect to projects', function(assert){
  visit('/');
  andThen(()=> {
    assert.equal(currentURL(), '/projects', 'should be the projects page');
  });
});

test('homepage should show all lunar projects', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.project').length, 3, 'display 3 lunar projects');
  });
});

test('clicking on project links takes you to the project show page', function(assert){
  visit('/');
  click('.card-action a:first-of-type')
  andThen(()=>{
    assert.equal(currentRouteName(), 'project', 'on the show page');
  });
});
