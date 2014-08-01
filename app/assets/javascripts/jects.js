/*globals $, _, Jects, window, Backbone */
window.Jects = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  project: function () {
    var project = this.projects.find(function (p) { return p.get('user_id') == UID });

    if(!project) {
      project = new Jects.Models.Project({ id: PID });
    }

    project.fetch();

    return project;
  },
  initialize: function() {
    Jects.errorBus = {};
    _.extend(Jects.errorBus, Backbone.Events);
    this.router = new Jects.Routers.Router();
    Backbone.history.start();
  }
};

