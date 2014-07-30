/*globals $, Jects, Backbone, JST */
Jects.Views.ErrorView = Backbone.View.extend({
  template: JST['errors/error'],

  initialize: function () {
    this.listenTo(Jects.errorBus, 'error', this.changeMessage);
  },

  changeMessage: function (type, description) {
    this.animate();
    var content = this.template({
      type: type,
      description: description
    });
    this.$el.html(content);

    return this;
  },

  animate: function () {
    this.$el.addClass('animated bounceInDown');
    this.$el.removeClass('hidden');
    setTimeout(function () {
      this.$el.addClass('animated fadeOutUp');
    }.bind(this), 4000);
  },

  render: function () {
    this.$el = $('.errors');
    this.$el.empty();
    return this;
  }
});
