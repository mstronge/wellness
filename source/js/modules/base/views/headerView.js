define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--header',
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

        className: 'header',

        events: {
            'click .js-action--show-login': 'showLogin',
            'click .js-action--mobile-nav': 'toggleMobileMenu'
        },

        stateClasses: {
            login: 'is-logged-in'
        },

        template: template,

        initialize: function() {

            this.listenTo(eventBus, eventBus.eventKeys.ROUTE_MEMBERS, this.toggleLoggedIn);
            this.listenTo(eventBus, eventBus.eventKeys.ROUTE_INDEX, this.toggleLoggedIn);

            $(window).scroll(function() {
            if ($(window).scrollTop() > 1){  
                this.$el.addClass("sticky");
            }
            else{
                this.$el.removeClass("sticky");
            }
            }.bind(this));
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        },

        showLogin: function(event) {
            event.preventDefault();
            eventBus.trigger(eventBus.eventKeys.TOGGLE_LOGIN_WINDOW);
        },

        toggleMobileMenu: function(event) {
            event.preventDefault();
            $('.js-mobile-menu').toggleClass('is-active');
        },

        toggleLoggedIn: function() {
            if(this.$el.hasClass(this.stateClasses.login)) {
                this.$el.removeClass(this.stateClasses.login);                
            } else {
                this.$el.addClass(this.stateClasses.login);
            }
        }

    });
});