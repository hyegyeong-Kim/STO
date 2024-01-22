$(function(){
  ham_btn('.hamber_btn');/* 모바일 header 햄버거 애니메이션 */

  $('.hamber_btn').on('click', function(){/* 모바일 header gnb 노출 */
    $('html, body').toggleClass('overflow');
    $('nav').toggleClass('show');
  });
})//ready

$(window).scroll(function(){
  header_scroll();
}).resize(function(){
  header_scroll();
})

function header_scroll(){
  var scrt = $(window).scrollTop()
  if(scrt > 0) {
    $('header').addClass('bg')
  }else if (scrt == 0) {
    $('header').removeClass('bg')
  }
}

function ham_btn(_target){
  var _this = document.querySelector(_target)
  if(_this != null){
      _this.addEventListener('click', ()=>{
          for(i=0; i<_this.children.length; i++){
              _this.children[i].classList.toggle('on')
          }
      })
  }
}