var scTop= 0;
var navChk= true;

$(window).scroll(function(){
    scTop = $(window).scrollTop();
    if(scTop > 200){
        $(".navs").css({"background-color":"#fff"});
    }
    else{
        $(".navs").css({"background-color":"rgba(255,255,255,0.2)"});
    }
});

$(".menu > li").hover(function(){
    $(".drop_menu").stop().fadeOut(0);
    $(this).find(".drop_menu").stop().fadeIn(100)
},function(){
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

var page = new SpaAni(".page",".anis",850);