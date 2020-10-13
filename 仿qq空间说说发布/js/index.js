$(function(){
    // 给按钮绑定点击事件
    $(".top button").click(foo);
    // 给body绑定键盘点击事件
    $(document).on('keydown',foo1);
    // 按钮点击事件函数foo
    function foo(){
        // 获取输入框的值
        let val = $(".top input").val();
        // 判定值是否为空
        if( val == ''){
            window.alert("输入内容不能为空！");
            return;
        }
        // 清空输入框的值
        $(".top input").val("");
        // 解除事件委托
        $("#parent").undelegate();
        // 初始化字符串
        let cc = "";
        // 拼接字符串
        cc += "<li><span class = 'text'>"+val+"</span><span class = 'time'>"+new Date().toLocaleString()+"</span>";
        cc += "<div class = 'can'><span></span><span></span><span></span></div>";
        cc += "<span class = 'gongneng'><a href = 'javascript:;'>删除</a></span></li>";
        // 添加拼接的字符串
        $("#parent").append(cc);
        // 绑定li的事件委托
        $("#parent").delegate("div","click",function(){
            // 切换功能按钮的显示隐藏
            $(this).next().toggle();
            // 给删除功能绑定点击事件
            $(this).next().children().click(function(){
                // 删除
                $(this).parent().parent().remove();
            })
        })
    }
    // 键盘事件函数
    function foo1(e){
        let kc = e.keyCode;
        if( kc  == 13 ){
            foo();
        }
    }

})