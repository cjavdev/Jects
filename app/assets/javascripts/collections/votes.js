/*globals Jects, Backbone, $ */
Jects.Collections.Votes = Backbone.Collection.extend({
  model: Jects.Models.Vote,
  url: 'api/votes',
  unvote: function () {
    $.ajax({
      url: 'api/votes',
      type: 'DELETE',
      success: function () {
        this.each(function (vote) {
          var proj = Jects.projects.get(vote.get('project_id'));
          proj.removeVote();
        });
        this.set([]);
        this.trigger('unvote');
      }.bind(this)
    });
  }
});

Jects.votes = new Jects.Collections.Votes();
