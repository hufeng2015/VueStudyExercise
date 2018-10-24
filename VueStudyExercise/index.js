//el:绑定页面的元素
//data:绑定页面元素对应的数据
//message: 绑定页面元素对应的数据的属性
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});
//seen：用于控制DOM元素
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
//data：可以是数组
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
});
//methods：用来挂接html中的v-on事件
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
        method1: function() {
            this.message = "我来测试！";
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
// 定义名为 list-item 的新组件
Vue.component('list-item',
    {
        // list-item 组件现在接受一个
        // "prop"，类似于一个自定义特性。
        // 这个 prop 名为 propslist1和propslist2。
        props: ['propslist1',
        'propslist2'],
        template: '<li>{{ propslist1.text }},{{ propslist2.tag }}</li>'
    });
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜',tag:'2018-10-24 18:16:59' },
            { id: 1, text: '奶酪', tag: '2018年10月24日 18:17:11'},
            { id: 2, text: '随便其它什么人吃的东西', tag: '二〇一八年十月二十四日 18:17:23' }
        ]
    }
})