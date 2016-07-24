require.config({
    baseUrl:"./js",
    paths:{
        "jquery":"libs/jquery",
        "jqueryui":"libs/jqueryui",
        "jquerymobile":"libs/jquery.mobile",
        "underscore":"libs/lodash",
        "backbone":"libs/backbone",
        "marionette":"libs/backbone.marionette",
        "handlebars":"libs/handlebars",
        "hbs":"libs/hbs",
        "json2":"libs/json2",
        "backbone.validateAll":"libs/plugins/Backbone.validateAll",
        "bootstrap":"libs/plugins/bootstrap",
        "text":"libs/plugins/text"
    },

    shim:{
        "bootstrap":["jquery"],
        "jqueryui":["jquery"],
        "jquerymobile":["jqueryui"],
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
        "backbone.validateAll":["backbone"]
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