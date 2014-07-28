/*globals Jects, Backbone, JST, _ */
Jects.Views.ProjectEdit = Backbone.View.extend({
  template: JST['projects/edit'],
  tagName: 'form',

  events: {
    'keyup': 'updateProject'
  },

  initialize: function () {
    this.debouncedKeyup = _.debounce(function () {
      this.model.save();
    }.bind(this), 100, false);
  },

  updateProject: function () {
    var params = this.$el.serializeJSON();
    this.model.set(params);
    this.debouncedKeyup();
  },

  render: function () {
    var content = this.template({
      project: this.model
    });

    this.$el.html(content);
    this.$el.addClass('animated fadeInUp');
    return this;
  }
});
