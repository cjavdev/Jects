/*globals Jects, Backbone, JST */
Jects.Views.ProjectsIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function () {
    this.collection.each(this.addProject.bind(this));
  },

  addProject: function (project) {
    var view = new Jects.Views.ProjectItem({
      model: project
    });
    this.addSubview('ul', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    var view = new Jects.Views.ProjectItem({
      model: Jects.project()
    });

    this.$('ul').prepend(view.render().$el);
    return this;
  }
});
