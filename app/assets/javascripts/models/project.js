/*globals $, Jects, Backbone */
Jects.Models.Project = Backbone.Model.extend({
  rootUrl: 'api/projects',

  generateChecklist: function () {
    return $.ajax({
      url: this.url() + '/checklist',
      type: 'POST',
      success: function () {
        console.log("issues created!");
      },
      error: function (data, res) {
        console.error(res.responseText);
      }
    });
  },
});
