require([
    "App", 
    "app.router", 
    "app.controller", 
    "backbone",
], function (
    App,
    AppRouter,
    AppController,
    Backbone
) {

    App.appRouter = new AppRouter({
        controller: new AppController()
    });

    App.start();

});