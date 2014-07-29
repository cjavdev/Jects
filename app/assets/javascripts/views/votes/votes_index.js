/*globals Jects, Backbone, JST */
Jects.Views.VotesIndex = Backbone.View.extend({
  template: JST['votes/index'],

  initialize: function () {
    this.listenTo(Jects.votes, 'all', this.render);
    this.listenTo(Jects.errorBus, 'error', this.shake);
  },

  events: {
    'click button.unvote': 'unvote'
  },

  shake: function () {
    this.$el.addClass('animated shake');
    setTimeout(this.render.bind(this), 1000);
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
