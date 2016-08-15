define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/home/templates/tmpl--home',
    'eventBus'
],
function (
    App,
    Backbone, 
    Marionette,
    template,
    eventBus
) {
    return Backbone.View.extend({

        className: 'home',

        events: {
            'click .js-action--register': 'showRegistration'
        },

        template: template,

        initialize: function() {
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        },

        showRegistration: function(event) {
            event.preventDefault();
            eventBus.trigger(eventBus.eventKeys.TOGGLE_REGISTER_WINDOW);            
        }

    });
});