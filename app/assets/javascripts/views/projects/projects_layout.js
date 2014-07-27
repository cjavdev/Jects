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

    var content = this.template();
    this.$el.html(content);

    this.$('#projects').html(indexView.render().$el);
    this.$('#project').html(formView.render().$el);
    return this;
  },
});
