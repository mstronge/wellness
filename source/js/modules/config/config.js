require.config({
    baseUrl:"./js",
    paths:{
        "App":"App",
        "jquery":"libs/jquery",
        "firebase":"libs/firebase",
        "underscore":"libs/lodash",
        "backbone":"libs/backbone",
        "backbonefire":"libs/backbonefire",
        "marionette":"libs/backbone.marionette",
        "handlebars":"libs/handlebars",
        "hbs":"libs/hbs",
        "json2":"libs/json2",
        "eventBus":"modules/utils/eventBus",
        "config":"modules/config/index",
    },

    shim:{
        "backbone":{
            "deps":["underscore", "jquery"],
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },
        "handlebars":{
            "exports":"Handlebars"
        },
        "firebase":{
            "deps":["jquery"],
            "exports":"Firebase"
        }
    },
    hbs: {
        templateExtension: "html",
        helperDirectory: "modules/base/helpers/",
        compileOptions: {},
        config: {
            disableI18n: true
        }
    }
});