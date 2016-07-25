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

        events: {
            'click .js-action--show-login': 'showLogin'
        },

        template: template,

        initialize: function() {
            console.log(App);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        },

        showLogin: function(event) {
            event.preventDefault();
            Backbone.trigger('show:login', this);
        }

    });
});