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
    $('nav').toggleClass('show');
  });

/* main */


})//ready