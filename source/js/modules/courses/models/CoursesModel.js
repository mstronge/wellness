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
            cost: '49.99',
            interval: 'monthly'
        },

        initialize: function() {

        },

        parse: function() {

        }
        
    });
});