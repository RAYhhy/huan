// ****<!-- 所编写的代码无效，因为它 只能 监听 一个窗口 --> ***


// 滚动  监听的  js  样式

// 入口函数
$(function(){

    // $('body').scrollspy({ target:'#navbar-example' });
    // $('[data-spy="scroll"]').each(function () {
    //     var $spy = $(this).scrollspy('refresh')
    //   })

    // 获取到头部元素的高度
    var headTop =  $("div#hero.hero").height();
    console.log( $("div#hero.hero"))

    // 获取到浏览器可视窗口的高度
    var docTop = $(window).height();
    console.log(docTop,headTop)

    // 刚刚好被浏览器卷掉的头部内容  高度（头部内容 -  可视窗口的高度）+ 20 
    scrollHeight = headTop - docTop + 20;

    // 获取到滚动导航的高度
    var sH = $("#list-example").height();


    // 绑定滚动事件
    $(document).on("scroll",function(){

        // 获取页面浏览器被卷掉的高度
        var scrollTop = $(this).scrollTop();
        // console.log("浏览器被卷掉的高度 =", scrollTop);

        // 如果页面被浏览器卷掉的高度 大于等于 （头部内容 -  可视窗口的高度）+ 20
        // 则滚动监听导航栏出现 并跟随着浏览器的移动而移动
        // 显示固定栏
        if(scrollTop >= scrollHeight){
            
            // 获取 滚动元素 并设置样式
            $("#navbar-example>.nav#list-example").css({
                zIndex: 99,
                heigth:docTop+"px",
            })
        }
        else{
             // 获取 滚动元素 并设置样式
             $("#navbar-example>.nav#list-example").css({
                 zIndex:0
               
            })
        }
    })

})