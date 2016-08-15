define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/members/templates/tmpl-members--subheader',
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

        className: 'members__subheader',

        template: template,

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }
        
    });
});