/*globals Jects, Backbone, $ */
Jects.Collections.Votes = Backbone.Collection.extend({
  model: Jects.Models.Vote,
  url: 'api/votes',
  unvote: function () {
    $.ajax({
      url: 'api/votes',
      type: 'DELETE',
      success: function () {
        this.set([]);
      }.bind(this)
    });
  }
});

Jects.votes = new Jects.Collections.Votes();
