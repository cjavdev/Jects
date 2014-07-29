/*globals $, _, Jects, window, Backbone */
window.Jects = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  project: function () {
    return this.projects.find(function (p) { return p.get('user_id') == UID });
  },
  initialize: function() {
    Jects.errorBus = {};
    _.extend(Jects.errorBus, Backbone.Events);
    this.router = new Jects.Routers.Router();
    Backbone.history.start();
  }
};

