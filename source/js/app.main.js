require([
    "App", 
    "routers/AppRouter", 
    "controllers/DesktopController", 
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
        controller:new AppController()
    });

    App.start();

});