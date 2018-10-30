var vmApp1 = new Vue(
    {
        el: "#app1",
        data: {
            message:"我要翻转过来"
        },
        computed: {
            reversedMessage:function() {
                return this.message.split('').reverse().join('');
            },
            addMessage:function() {
                return this.message + "……" + new Date();
            }
        }
    }
    );
var vmApp2 = new Vue({
    el: "#app2",
    data: {
        now:Date.now()
    },
    computed: {
        refreshDateCache: function() {
            return this.now - 1;
        },
        refreshDateNotCache: function () {
            return new Date();
        }
    }
});
var vmApp3 = new Vue({
    el: "#app3",
    data: {
        firstName: "胡",
        secondName: "丰",
        fullName:"胡丰"
    },
    watch: {
        firstName:function(f) {
            this.fullName = f + this.secondName;
        },
        secondName:function(s) {
            this.fullName = this.firstName + s;
        }
    }
});
var vmApp4 = new Vue({
    el: "#app4",
    data: {
        firstName: "胡",
        secondName: "丰"
    },
    computed: {
        fullName:function() {
            return this.firstName + this.secondName;
        }
    }
});
var vmApp5 = new Vue({
    el: "#app5",
    data: {
        firstName: "胡",
        secondName: "丰"
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + this.secondName;
            },
            set: function (newValue) {
                var names = newValue.split('');
                this.firstName = names[0];
                this.secondName = newValue.replace(names[0], '');
            }
        }
    }
})