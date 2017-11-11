import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startYear: DS.attr('string'),
  endYear: DS.attr('string'),
  logoURL: DS.attr('string')
});
