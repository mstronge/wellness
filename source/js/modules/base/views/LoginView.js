define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--login',
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

        className: 'login',

        events: {
            'click .js-action--close-login': 'toggleLogin'
        },
    
        stateClasses: {
            active: 'is-active'
        },

        template: template,

        initialize: function() {
            this.listenTo(eventBus, eventBus.eventKeys.TOGGLE_LOGIN_WINDOW, this.toggleLogin);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        },

        toggleLogin: function() {
           this.$el.toggleClass(this.stateClasses.active)
        }

    });
});