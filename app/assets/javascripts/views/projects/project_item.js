/*globals Jects, Backbone, JST */
Jects.Views.ProjectItem = Backbone.View.extend({
  template: JST['projects/item'],
  tagName: 'li',

  className: function () {
    return (this.model === Jects.project()) ? 'mine' : 'item';
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'change:title change:url', this.emphasizeTitle);
    this.listenTo(this.model, 'change:gitrepo', this.emphasizeGithub);
  },

  render: function () {
    var content = this.template({
      project: this.model
    });
    this.$el.html(content);
    return this;
  },

  emphasizeTitle: function () {
    setTimeout(function () {
      this.$('a.title').addClass('animated shake');
    }.bind(this), 300);
  },

  emphasizeGithub: function () {
    setTimeout(function () {
      this.$('a.gitrepo').addClass('animated shake');
    }.bind(this), 300);
  }
});
