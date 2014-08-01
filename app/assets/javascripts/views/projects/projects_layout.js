/*globals $, _, JST, Backbone, Jects */

Jects.Views.ProjectsLayout = Backbone.View.extend({
  template: JST['projects/layout'],

  render: function () {
    var indexView = new Jects.Views.ProjectsIndex({
      collection: this.collection
    });
    var votesView = new Jects.Views.VotesIndex({
      collection: Jects.votes
    });
    var errorsView = new Jects.Views.ErrorView();

    var content = this.template();
    this.$el.html(content);

    this.$('#projects').html(indexView.render().$el);
//  this.$('#project').html(formView.render().$el);
    this.$('#votes').html(votesView.render().$el);
    this.$('#errors').html(errorsView.render().$el);

    return this;
  }
});
