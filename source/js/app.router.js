define([
    'backbone',
    'marionette'
], function(
    Backbone, 
    Marionette
) {

   return Backbone.Marionette.AppRouter.extend({
       appRoutes: {
           "": "index",
           "login": "login",
           "members": "members"
       }
   });

});