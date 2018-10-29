var vmApp1 = new Vue({
    el: "#app1",
    data: {
        message: "这个值只会加载一遍"
    }
});
vmApp1.message = "2018年10月29日 12:02:03";
var vmApp2 = new Vue({
        el: "#app2",
        data: {
            rawHtml: "<span style=\"color:blue\">我是红色</span>"
        }
    }
);
var vmApp3 = new Vue({
    el: "#app3",
    data: {
        isButtonDisable:true
    },
    methods: {
        show:function() {
            alert(123);
        }
    }
});
var vmApp4 = new Vue({
    el: "#app4",
    data: {
        message:"JavaScript 表达式"
    }
});
var vmApp5=new Vue({
    el: "#app5",
    data: {
        url:"https://www.baidu.com"
    }
})