/*globals Jects, Backbone, JST */
Jects.Views.ProjectsIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addProject);
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

    return this;
  }
});
