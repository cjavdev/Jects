/*globals Jects, Backbone, JST, _, $ */
Jects.Views.ProjectEdit = Backbone.View.extend({
  template: JST['projects/edit'],
  tagName: 'form ',
  className: 'col-md-8 col-md-offset-2',

  events: {
    'submit': 'updateProject',
    'click a.checklist': 'generateChecklist',
    'click a.refresh': 'refreshRepos',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
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

  updateProject: function (event) {
    event.preventDefault();
    var params = this.$el.serializeJSON();
    params.url = params.url.replace("https://", "").replace("http://","");
    this.model.save(params, {
      success: function () {
        Backbone.history.navigate("#/", { trigger: true });
      }
    });
  },

  refreshRepos: function (event) {
    event.preventDefault();
    $(event.currentTarget).text("one moment...");
    $(event.currentTarget).addClass("animated flash");
    $(event.currentTarget).prop('disabled', true);

    $.ajax({
      url: 'api/repo',
      type: 'PATCH',
      success: function (data) {
        Jects.repos = data;
        this.render();
      }.bind(this)
    });
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
