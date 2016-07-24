define([
    'jquery',
    'backbone', 
    'marionette',
    'underscore',
    'handlebars',
    'modules/base/views/HeaderView',
    'modules/base/views/FooterView',
    'modules/home/views/HomeView'
], function (
    $, 
    Backbone, 
    Marionette, 
    _, 
    Handlebars,
    HeaderView,
    FooterView,
    HomeView
) {

    var App = new Backbone.Marionette.Application();

    function isMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
    }

    App.addRegions({
        headerRegion: ".js-region--header",
        mainRegion: ".js-region--main",
        footerRegion: ".js-region--footer"
    });

    App.addInitializer(function () {
        Backbone.history.start();
    });

    App.mobile = isMobile();

    App.start = function() {
        console.log('App was started ...')
        App.headerRegion.show(new HeaderView());
        App.footerRegion.show(new FooterView());
        App.mainRegion.show(new HomeView());
    };

    return App;

});