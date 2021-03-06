/**
 * StorageBarView.js
 */
(function (spiderOakApp, window, undefined) {
  "use strict";
  var console = window.console || {};
  console.log = console.log || function(){};
  var Backbone    = window.Backbone,
      _           = window._,
      $           = window.$;

  spiderOakApp.StorageBarView = Backbone.View.extend({
    el: "#storagebar",
    initialize: function() {
      _.bindAll(this);
      this.model.on("change", this.render, this );
      this.model.fetch({
        error: function(model, response, options) {
          spiderOakApp.dialogView.showNotify({
            title: "<i class='icon-warning'></i> Error",
            subtitle: "An error occurred.",
            duration: 4000
          });
        }
      });
    },
    render: function() {
      this.$el.empty();
      this.$el.html(
        _.template(
          window.tpl.get("storageBarTemplate"),
          this.model.toJSON()
        )
      );
      return this;
    },
    empty: function() {
      this.$el.empty();
    }
  });

})(window.spiderOakApp = window.spiderOakApp || {}, window);
