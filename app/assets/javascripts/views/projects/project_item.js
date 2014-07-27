/*globals Jects, Backbone, JST */
Jects.Views.ProjectItem = Backbone.View.extend({
  template: JST['projects/item'],
  tagName: 'li',

  className: function () {
    return (this.model === Jects.project()) ? 'mine' : '';
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var content = this.template({
      project: this.model
    });
    this.$el.html(content);
    return this;
  }
});
