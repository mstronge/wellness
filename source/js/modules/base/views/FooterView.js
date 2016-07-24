define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--footer'
],
function (
    App,
    Backbone, 
    Marionette,
    template
) {
    return Backbone.View.extend({

        tagName: 'footer',

        className: 'footer',

        template: template,

        initialize: function() {
            
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });
});