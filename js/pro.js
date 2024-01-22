$(function(){

})//ready
$(window).scroll(function(){
  fadein()
}).resize(function(){
  fadein()
})

function fadein(){
  var scrt = $(window).scrollTop()
  var t
  t = $('.info').offset().top
  console.log(t)
  if(scrt >= t * 0.5){
    var info_dl = $('.info').children('dl')
    info_dl.each(function(i){
      info_dl.eq(i).addClass('fadein')
      info_dl.eq(i).css({"transition-delay":0.1*i+'s'})
    });
  };
}