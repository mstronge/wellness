define([
    'backbone',
    'underscore'
], function(
    Backbone,
    _
){

    return _.extend({
        
        eventKeys: {
            TOGGLE_LOGIN_WINDOW: 'show:login',
            TOGGLE_REGISTER_WINDOW: 'show:register',
            ROUTE_MEMBERS: 'route:members',
            ROUTE_INDEX: 'route:index',            
        }

    }, Backbone.Events);

});