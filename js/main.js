$(function(){
 /* header */
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
  ham_btn('.hamber_btn')
  $('.hamber_btn').on('click', function(){
    $('html, body').toggleClass('overflow');
    $('nav').toggleClass('show');
  });


  
  function motion(){
    var scrt = $(window).scrollTop()
    var winh = $(window).height()
    var t_1
    var t_2
    $('.bind').each(function(){
      t_1 = $(this).offset().top
      if(scrt >= t_1 - winh){
        $(this).children('img').addClass('view_lt')
        $(this).children('ul').addClass('view_rt')
      }
    })//each
    $('.goods').each(function(){
      t_2 = $(this).offset().top
      if(scrt >= t_2 * 0.5){
        $(this).children('.inner').children('dl').addClass('view_bottom')
      }
    })
    console.log(t_2 + '/' + scrt + '/' + winh);
  }//fn

  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })

/* main */








})//ready