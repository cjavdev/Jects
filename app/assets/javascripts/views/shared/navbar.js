/*globals JST, Jects, Backbone */
Jects.Views.Navbar = Backbone.View.extend({
  template: JST["shared/navbar"],
  tagName: 'ul',
  className: 'nav navbar-nav',

  initialize: function (options) {
    this.router = options.router;
    this.currentRoute = 'index';

    this.links = [{
      path: '#/',
      route: 'index',
      title: 'All Projects'
    },{
      path: '#/project',
      route: 'show',
      title: 'My Project'
    }];

    this.listenTo(this.router, 'route', this.updateRoute);
  },

  updateRoute: function (route) {
    this.currentRoute = route;
    this.render();
  },

  render: function () {
    var content = this.template({
      links: this.links,
      route: this.currentRoute
    });
    this.$el.html(content);

    return this;
  }
});
