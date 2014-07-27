/*globals Jects, Backbone, JST */
Jects.Views.ProjectEdit = Backbone.View.extend({
  template: JST['projects/edit'],
  tagName: 'form',

  events: {
    'keyup': 'updateProject'
  },

  updateProject: function () {
    var params = this.$el.serializeJSON();
    console.log(params);
    this.model.set(params);
  },

  render: function () {
    var content = this.template({
      project: this.model
    });

    this.$el.html(content);
    return this;
  }
});
