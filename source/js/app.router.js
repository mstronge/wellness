define([
    'App',
    'backbone',
    'marionette'
], function(
    App,
    Backbone, 
    Marionette
) {

   return Backbone.Marionette.AppRouter.extend({

       appRoutes: {
           "": "index",
           "members": "members",
           "*notFound": "notFound"
       },

       initialize: function() {
           this.on('all', this._signalRouteChange);
       },

       _signalRouteChange: function(route) {

           console.log(route);
           if(route === 'route') return;

           var fragment = Backbone.history.getFragment();

           Backbone.trigger('routeHistory', fragment);

           App.currentRoute = fragment;

       }

   });

});