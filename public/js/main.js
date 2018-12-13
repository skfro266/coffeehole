$(".choice_list > li").hover(function(){
    $(this).css({"box-shadow":"4px 4px 5px rgba(0,0,0,0.3)"});
},function(){
    $(this).css({"box-shadow":"none"});
});

$(".hole_list > li img").hover(function(){
    $(this).css({"animation-name":"holeAni"});
},function(){
    $(this).css({"animation-name":"holeBack"});
});