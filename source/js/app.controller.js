define([
    'App',
    'backbone',
    'marionette',
    'config',
    'modules/members/views/MembersView',
    'modules/home/views/HomeView',
    'modules/base/views/HeaderView',
    'modules/base/views/MembersHeaderView',
    'eventBus'
],
function (
    App,
    Backbone, 
    Marionette,
    config,
    MembersView,
    HomeView,
    HeaderView,
    MembersHeaderView,
    eventBus
) {
    return Backbone.Marionette.Controller.extend({
        
        initialize: function (options) {

        },

        index: function () {
            App.appRouter.navigate('/');
            this.viewControls('home');
        },

        members: function() {
            App.appRouter.navigate('members');
            this.viewControls('members');                               
        },

        viewControls: function(tab) {

            switch (tab) {
                case 'home':
                    view = new HomeView();
                    header = new HeaderView();
                    break;
                case 'members':
                    view = new MembersView();
                    header = new MembersHeaderView();
                    break;
            }

            if(view) {
                App.mainRegion.show(view)
            }

            if(header) {
                App.headerRegion.show(header)
            }

        },

        notFound: function() {
            this.index();
        }

    });
});