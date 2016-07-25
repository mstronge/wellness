define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/home/templates/tmpl--home'
],
function (
    App,
    Backbone, 
    Marionette,
    template
) {
    return Backbone.View.extend({

        className: 'home',

        template: template,

        initialize: function() {
            console.log(App);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });
});