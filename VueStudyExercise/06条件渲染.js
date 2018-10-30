var vmLogin = new Vue({
    el: "#login",
    data: {
        loginType:"username"
    },
    methods: {
        toggleLoginType: function() {
            var me = this;
            return me.loginType = me.loginType === 'username' ? 'email' : 'username';
        }
    }
})