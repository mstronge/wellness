define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/base/templates/tmpl--login'
],
function (
    App,
    Backbone, 
    Marionette,
    template
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
            console.log(App);
            this.listenTo(Backbone, 'show:login', this.toggleLogin);
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