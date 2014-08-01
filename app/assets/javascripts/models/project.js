/*globals $, Jects, Backbone */
Jects.Models.Project = Backbone.Model.extend({
  urlRoot: 'api/projects',

  addVote: function () {
    var votesCount = this.get('votes_count');
    this.set('votes_count', votesCount + 1);
  },

  removeVote: function () {
    var votesCount = this.get('votes_count');
    this.set('votes_count', votesCount - 1);
  },

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
