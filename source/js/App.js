define([
    'jquery',
    'backbone', 
    'marionette',
    'underscore',
    'handlebars',
    'modules/base/views/HeaderView',
    'modules/base/views/FooterView',
    'modules/home/views/HomeView',
    'modules/base/views/LoginView'
], function (
    $, 
    Backbone, 
    Marionette, 
    _, 
    Handlebars,
    HeaderView,
    FooterView,
    HomeView,
    LoginView
) {

    var App = new Backbone.Marionette.Application();

    function isMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
    }

    App.addRegions({
        headerRegion: ".js-region--header",
        mainRegion: ".js-region--main",
        footerRegion: ".js-region--footer",
        loginRegion: ".js-region--login"
    });

    App.addInitializer(function () {
        Backbone.history.start();
        App.EventBus = _.extend({}, Backbone.Events)        
    });

    App.mobile = isMobile();

    App.start = function() {
        console.log(App);
        App.headerRegion.show(new HeaderView());
        App.footerRegion.show(new FooterView());
        App.mainRegion.show(new HomeView());
        App.loginRegion.show(new LoginView());
    };

    return App;

});