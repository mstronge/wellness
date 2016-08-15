define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--members-header',
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

        className: 'header header--members',

        events: {
            'click .js-action--mobile-nav': 'toggleMobileMenu'
        },

        stateClasses: {
            login: 'is-logged-in'
        },

        template: template,

        initialize: function() {

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

        toggleMobileMenu: function(event) {
            event.preventDefault();
            $('.js-mobile-menu').toggleClass('is-active');
        }

    });
});