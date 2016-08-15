define([
    'App',
    'backbone',
    'marionette',
    'firebase',
    'hbs!modules/base/templates/tmpl--register',
    'eventBus'
],
function (
    App,
    Backbone, 
    Marionette,
    firebase,
    template,
    eventBus
) {
    return Backbone.View.extend({

        className: 'register',

        events: {
            'click .js-action--close-register': 'toggleRegister',
            'click .js-action--register': 'validateRegister',
            'click .js-action--register-facebook': 'registerFacebook'
        },
    
        stateClasses: {
            active: 'is-active'
        },

        template: template,

        initialize: function() {
            this.listenTo(eventBus, eventBus.eventKeys.TOGGLE_REGISTER_WINDOW, this.toggleRegister);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        },

        toggleRegister: function() {
           this.$el.toggleClass(this.stateClasses.active)
        },

        validateRegister: function(event) {
            event.preventDefault();
            this.error = false;
            this.$errors = this.$el.find('.js-errors');
            this.$errors.html('');
            this.$email = this.$el.find('.js-input-email').val();
            this.$repeatEmail = this.$el.find('.js-input-email--repeat').val();
            this.$password = this.$el.find('.js-input-password').val();
            this.$repeatPassword = this.$el.find('.js-input-password--repeat').val();


            if(this.$email !== this.$repeatEmail) {
                this.error = true;
                this.$errors.append('<li>Email does not match, please enter again.</li>')
            }
            if(this.$password !== this.$repeatPassword) {
                this.error = true;
                this.$errors.append('<li>Please re-enter your password, it does not match.</li>');
            }

            if(this.error) {
                return;
            } else {
                this.$errors.html('');
                this.registerUser(this.$email, this.$password);
            }

        },

        registerUser: function(email, password) {
            this.$errors = this.$el.find('.js-errors');

            App.Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                this.$errors.append('<li>' + error.message + '</li>');
            }.bind(this));
        },

        registerFacebook: function(event) {
            event.preventDefault();
            this.$errors = this.$el.find('.js-errors');

            App.Firebase.auth().signInWithPopup(App.FB).then(function(result) {

            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user);
            console.log(token);

            }).catch(function(error) {
                this.$errors.append('<li>' + error.message + '</li>');
            }.bind(this));
        },

        loggedIn: function(event) {
            event.preventDefault();
            this.$el.toggleClass(this.stateClasses.active);
            window.location = '/#members';
        }

    });
});