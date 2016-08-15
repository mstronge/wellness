define([
    'App',
    'backbone',
    'firebase',
    'modules/courses/models/CoursesModel'
],
function (
    App,
    Backbone,
    Firebase,
    Model
) {
    return Backbone.Collection.extend({

        url: 'https://project-2899793051784860925.firebaseio.com/courses',

        model: Model,

        initialize: function() {

        },

        parse: function() {

        }
        
    });

});