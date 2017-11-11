import { test } from 'qunit';
import moduleForAcceptance from 'moon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage content');

test('homepage should show all lunar projects', function(assert) {
  visit('/')
  andThen(() => {
    assert.equal(find('.project').length, 3, 'display 3 lunar projects')
  })
})
