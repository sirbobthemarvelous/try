
$(".emblem").click(function(){
  $(this).css({
        "-webkit-transform": "rotate(90deg)",
        "-moz-transform": "rotate(90deg)",
        "transform": "rotate(90deg)" 
    });
}); 


$(".newFish").click(function(){
  $(".jsExample").append("<li>blue fish</li>");
}); 


$(".Blue").click(function(){
  $(".jsExample").css({
        "color": "blue"
    });
}); 

$(".Bold").click(function(){
  $(".jsExample").css({
        "font-weight": "bold"
    });
}); 