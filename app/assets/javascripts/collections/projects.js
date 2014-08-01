/*globals Jects, Backbone */
Jects.Collections.Projects = Backbone.Collection.extend({
  model: Jects.Models.Project,
  url: 'api/projects',
  comparator: function () {
    return -this.get('votes_count');
  }
});

Jects.projects = new Jects.Collections.Projects();
