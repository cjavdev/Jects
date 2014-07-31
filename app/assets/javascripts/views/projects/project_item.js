/*globals $, Jects, Backbone, JST */
Jects.Views.ProjectItem = Backbone.View.extend({
  template: JST['projects/item'],
  tagName: 'li',

  events: {
    'click .upvote': 'upvote'
  },

  className: function () {
    return (this.model === Jects.project()) ? 'item mine' : 'item';
  },

  initialize: function () {
    this.listenTo(Jects.votes, 'unvote', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'change:title change:url', this.emphasizeTitle);
    this.listenTo(this.model, 'change:gitrepo', this.emphasizeGithub);
  },

  render: function () {
    var content = this.template({
      project: this.model
    });
    this.$el.html(content);
    return this;
  },

  emphasizeTitle: function () {
    setTimeout(function () {
      this.$('a.title').addClass('animated tada');
    }.bind(this), 300);
  },

  emphasizeGithub: function () {
    setTimeout(function () {
      this.$('a.gitrepo').addClass('animated tada');
    }.bind(this), 300);
  },

  upvote: function () {
    var vote = new Jects.Models.Vote({ project_id: this.model.id });
    vote.save({}, {
      success: function () {
        Jects.votes.add(vote);
        this.render();
      }.bind(this),
      error: function (data, response) {
        Jects.errorBus.trigger('error', 'Error', JSON.parse(response.responseText)[0]);
      }.bind(this),
    });
  }
});
