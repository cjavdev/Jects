/*globals Jects, Backbone, JST, _, $ */
Jects.Views.ProjectEdit = Backbone.View.extend({
  template: JST['projects/edit'],
  tagName: 'form',

  events: {
    'keyup': 'updateProject',
    'change': 'updateProject',
    'click a': 'generateChecklist'
  },

  initialize: function () {
    this.debouncedKeyup = _.debounce(function () {
      this.model.save();
    }.bind(this), 100, false);
  },

  generateChecklist: function (event) {
    event.preventDefault();
    $(event.currentTarget).text("one moment...");
    $(event.currentTarget).addClass("animated flash");
    $(event.currentTarget).prop('disabled', true);

    this.model.generateChecklist().then(function () {
      $(event.currentTarget).hide();
      Jects.errorBus.trigger("error", "Success", "Just made a bunch of issues for you to checkoff :), go check your projects github repo");
    });
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
