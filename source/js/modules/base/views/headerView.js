define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--header'
],
function (
    App,
    Backbone, 
    Marionette,
    template
) {
    return Backbone.View.extend({

        tagName: 'header',

        className: 'header',

        template: template,

        initialize: function() {
            
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });
});