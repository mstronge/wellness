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
    headerView
) {
    return Backbone.View.extend({

        template: headerTemplate,

        initialize: function() {
            
        },

        render: function() {

        }

    });
});