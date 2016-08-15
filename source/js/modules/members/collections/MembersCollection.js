define([
    'App',
    'backbone',
    'firebase',
    'modules/members/models/MembersModel'
],
function (
    App,
    Backbone,
    Firebase,
    Model
) {
    return Backbone.Collection.extend({

        url: 'https://project-2899793051784860925.firebaseio.com/members',

        model: Model,

        initialize: function() {
            this.listenTo(this, 'sync', this.updateMembers);
        },

        parse: function() {

        },

        updateMembers: function(collection) {
            console.log(collection)
        }
        
    });

});