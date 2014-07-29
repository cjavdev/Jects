/*globals $, Jects, Backbone, JST */
Jects.Views.ErrorView = Backbone.View.extend({
  template: JST["errors/error"],

  initialize: function () {
    this.listenTo(Jects.errorBus, 'error', this.changeMessage);
  },

  changeMessage: function (type, description) {
    console.log(type, description);
    this.$el.addClass('animated bounceInDown');
    this.$el.removeClass('hidden');
    var content = this.template({
      type: type,
      description: description
    });
    this.$el.html(content);
    setTimeout(function () {
      this.$el.addClass('animated fadeOutUp');
    }.bind(this), 4000);
    return this;
  },

  render: function () {
    this.$el = $('.errors');
    this.$el.empty();
    return this;
  }
});
