$(function(){

});//ready

$(window).scroll(function(){
  motion();
}).resize(function(){
  motion();
})

/* main */
function motion(){
  var scrt = $(window).scrollTop()
  var winh = $(window).height()
  var t_1
  var t_2
  t_1 = $('.bind').offset().top
  t_2 = $('.goods').offset().top
  if(scrt >= t_1 - winh){
    $('.bind').children('img').addClass('view_lt')
    $('.bind').children('ul').addClass('view_rt')
  };
  if(scrt >= t_2 * 0.5){
    $('.goods').children('.inner').children('dl').addClass('view_bottom')
  }
}//fn