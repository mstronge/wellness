define([
    'App',
    'backbone'
],
function (
    App,
    Backbone
) {
    return Backbone.Model.extend({

        defaults: {
            subscriptions: ['None'],
            type: 'normal',
            isAdmin: false,
        },

        initialize: function() {

        },

        parse: function() {

        }
        
    });
});