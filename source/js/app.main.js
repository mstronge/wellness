require([
    "App", 
    "app.router", 
    "app.controller", 
    "jquery", 
    "backbone", 
    "marionette",
    "jqueryui", 
    "bootstrap", 
    "backbone.validateAll"
], function (
    App,
    AppRouter,
    AppController
) {

    App.appRouter = new AppRouter({
        controller: new AppController()
    });

    App.start();

});