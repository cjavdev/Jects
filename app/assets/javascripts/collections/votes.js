/*globals Jects, Backbone */
Jects.Collections.Votes = Backbone.Collection.extend({
  model: Jects.Models.Vote,
  url: 'api/votes'
});
