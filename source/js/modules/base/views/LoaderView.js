define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--loader'
],
function (
    App,
    Backbone, 
    Marionette,
    template
) {
    return Backbone.View.extend({

        template: template,

        initialize: function() {
            
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});