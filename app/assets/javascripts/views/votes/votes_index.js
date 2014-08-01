/*globals Jects, Backbone, JST */
Jects.Views.VotesIndex = Backbone.View.extend({
  template: JST['votes/index'],

  initialize: function () {
    this.listenTo(Jects.votes, 'all', this.render);
  },

  events: {
    'click button.unvote': 'unvote'
  },

  unvote: function () {
    Jects.votes.unvote();
  },

  render: function () {
    this.$el.removeClass('animated shake');
    var content = this.template({
      votesLeft: (3 - Jects.votes.length)
    });
    this.$el.html(content);
    return this;
  }
});
