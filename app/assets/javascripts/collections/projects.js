/*globals Jects, Backbone */
Jects.Collections.Projects = Backbone.Collection.extend({
  model: Jects.Models.Project,
  url: 'api/projects'
});

Jects.projects = new Jects.Collections.Projects();
