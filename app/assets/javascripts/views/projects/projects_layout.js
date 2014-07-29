/*globals $, _, JST, Backbone, Jects */

Jects.Views.ProjectsLayout = Backbone.View.extend({
  template: JST['projects/layout'],

  render: function () {
    var indexView = new Jects.Views.ProjectsIndex({
      collection: this.collection
    });
    var formView = new Jects.Views.ProjectEdit({
      model: this.model
    });
    var votesView = new Jects.Views.VotesIndex({
      collection: Jects.votes
    });

    var content = this.template();
    this.$el.html(content);

    this.$('#projects').html(indexView.render().$el);
    this.$('#project').html(formView.render().$el);
    this.$('#votes').html(votesView.render().$el);

    return this;
  }
});
