var scTop= 0;
var navChk= true;

$(window).scroll(function(){
    scTop = $(window).scrollTop();
    if(scTop > 200){
        $(".navs").css({"background-color":"#fff","position":"fixed","top":0,"z-index":"9999","border-bottom":"1px solid #0f54ae"});
        $(".menu > li").css({"color":"#666"});
        $(".drop_menu").css({"border-right":"1px solid #ccc","border-left":"1px solid #ccc","border-bottom":"1px solid #ccc"});
        $(".drop_menu > li").css({"background-color":"#fff"});
        $(".drop_menu > li").mouseenter(function(){
            $(this).css({"background-color":"rgb(238, 238, 238)","color":"#0f54ae"});
        });
        $(".drop_menu > li").mouseleave(function(){
            $(this).css({"background-color":"rgba(255,255,255,1)","color":"#333"});
        });
    }
    else{
        $(".navs").css({"background-color":"rgba(255,255,255,0.2)","position":"static","border-bottom":0});
        $(".menu > li").css({"color":"#fff"});
        $(".drop_menu").css({"border-right":0,"border-left":0,"border-bottom":0});
        $(".drop_menu > li").css({"background-color":"rgba(255,255,255,0.2)","color":"#333"});
        $(".drop_menu > li").mouseenter(function(){
            $(this).css({"background-color":"rgb(238, 238, 238)","color":"#0f54ae"});
        });
        $(".drop_menu > li").mouseleave(function(){
            $(this).css({"background-color":"rgba(255,255,255,0.2)","color":"#333"});
        });
    }
});

$(".navi > li").mouseenter(function(){
    $(this).css({"color":"#000"});
});
$(".navi > li").mouseleave(function(){
    $(this).css({"color":"#0f54ae"});
});

$(".menu > li").mouseenter(function(){
    $(".drop_menu").stop().fadeOut(0);
    $(this).find(".drop_menu").stop().fadeIn(100)
});
$(".menu > li").mouseleave(function(){
    $(".drop_menu").stop().fadeOut(0);
});

$(".choice_list > li").mouseenter(function(){
    $(this).css({"box-shadow":"4px 4px 5px rgba(0,0,0,0.3)"});
});
$(".choice_list > li").mouseleave(function(){
    $(this).css({"box-shadow":"none"});
});

$(".black_bg").mouseenter(function(){
    $(this).children("img").css({"animation-name":"holeAni"});
    $(this).children(".hole_bt").show();
});

$(".black_bg").mouseleave(function(){
    $(this).children("img").css({"animation-name":"holeBack"});
    $(this).children(".hole_bt").hide();
});

var page = new SpaAni(".page",".anis",830);

$(".navs_mo > .fa-bars").click(function(){
    $(".menu_mo").stop().animate({"left":0}, 100);
    $(this).hide();
    $(this).next().show();
});

$(".navs_mo > .fa-times").click(function(){
    $(".menu_mo").animate({"left":"-26%"}, 100);
    $(this).prev().show();
    $(this).hide();
});

$(".mo_click").click(function(){
    $(this).parent().next().slideToggle();
});
