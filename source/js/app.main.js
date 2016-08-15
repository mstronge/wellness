require([
    'App', 
    'app.router', 
    'app.controller',
    'modules/base/views/HeaderView',
    'modules/base/views/FooterView',
    'modules/home/views/HomeView',
    'modules/base/views/LoginView',
    'modules/base/views/RegisterView',
    'modules/members/collections/MembersCollection',
    'modules/courses/collections/CoursesCollection',
    'backbone',
    'eventBus'
], function (
    App,
    AppRouter,
    AppController,
    HeaderView,
    FooterView,
    HomeView,
    LoginView,
    RegisterView,
    MembersCollection,
    CoursesCollection,
    Backbone,
    eventBus
) {

    App.appRouter = new AppRouter({
        controller: new AppController()
    });

    App.start();

    App.Members = new MembersCollection();
    App.Courses = new CoursesCollection();

    console.log('Application was started');

    App.footerRegion.show(new FooterView());
    App.loginRegion.show(new LoginView());
    App.registerRegion.show(new RegisterView());

});