define([
    'App',
    'backbone',
    'marionette',
    'hbs!modules/members/templates/tmpl-members--home',
    'modules/members/views/SubHeaderView',
    'eventBus'
],
function (
    App,
    Backbone, 
    Marionette,
    template,
    SubHeaderView,
    eventBus
) {
    return Backbone.View.extend({

        className: 'members',

        regions: {
            subheader: '.js-region--subheader',
            content: '.js-region--content'
        },

        template: template,

        initialize: function() {
            eventBus.trigger(eventBus.eventKeys.ROUTE_MEMBERS);
        },

        render: function() {
            this.$el.html(this.template);

            this.subheader = new SubHeaderView();
            console.log($(this.regions.subheader).html(this.subheader.render().el));

            return this;
        }
        
    });
});