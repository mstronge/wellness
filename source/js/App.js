define([
    'jquery',
    'backbone', 
    'marionette',
    'underscore',
    'handlebars',
    'firebase',
    'config',
    'eventBus'
], function (
    $, 
    Backbone, 
    Marionette, 
    _, 
    Handlebars,
    Firebase,
    config,
    eventBus
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
        loginRegion: ".js-region--login",
        registerRegion: ".js-region--register"
    });

    App.addInitializer(function () {
        Backbone.history.start();

        App.Firebase = firebase.initializeApp(config.firebase);
        App.FB = new firebase.auth.FacebookAuthProvider();
        App.Database = firebase.database();

        console.log(App.Database);
        
        App.eventBus = _.extend({}, Backbone.Events)        
    });

    App.on('start', function() {
        console.log('App was started');
    });

    config.isMobile = isMobile();

    return App;

});