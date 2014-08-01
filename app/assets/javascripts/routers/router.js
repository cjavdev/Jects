/*globals $, Backbone, Jects */
Jects.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'project': 'show'
  },

  index: function () {
    Jects.projects.fetch();

    var view = new Jects.Views.ProjectsLayout({
      collection: Jects.projects
    });

    this._swapView(view);
  },

  show: function () {
    var view = new Jects.Views.ProjectEdit({
      model: Jects.project()
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    $('main').html(view.render().$el);
  }
});
