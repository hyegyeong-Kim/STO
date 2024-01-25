$(function(){
  /* include */
  $('header').load('./include/header.html');
  $('footer').load('./include/footer.html');
  /* //include */
  tab_active('.tab_wrap > ul', 'click')
  $('.board_type_toggle dt a').click(function() {
    toggle_slide(this);
    });
    open_close ()
})//ready


function tab_active(_target, evt) {//_target : 대상 / evt : 핸들러
  var evt,
  tab = document.querySelectorAll(_target);
  console.log(_target)
  
  tab.forEach(el => {
      if(el.classList.contains('demo')){// 탭버튼에만 current 효과 줄 때
          el.querySelectorAll('button, a').forEach((el, i) => {
              el.addEventListener(evt, function(){
                  const parent_index = Array.from(el.closest('ul').children).indexOf(el.parentNode);
                  for(j=0; j<el.closest('ul').childElementCount; j++){
                      el.closest('ul').children[j].classList.remove('current');
                  }
                  el.parentNode.classList.add('current');
              });
          });
      } else {
          el.querySelectorAll('button, a').forEach((el, i) => {
              el.addEventListener(evt, function(){
                  const parent_index = Array.from(el.closest('ul').children).indexOf(el.parentNode);
                  for(j=0; j<el.closest('ul').childElementCount; j++){
                      el.closest('ul').children[j].classList.remove('current');
                      el.closest('.tab_wrap').querySelector('.tab_content').children[j].classList.remove('current');
                  }
                  el.parentNode.classList.add('current');
                  el.closest('.tab_wrap').querySelector('.tab_content').children[i].classList.add('current');
              });
          });
      }
  })
}
/* //tab */

/* accodian */
function toggle_slide(_target) {
    var _target = $(_target);
    _target.closest('dl').hasClass('single') ? // 하나만 오픈
        (
            _target.parent().hasClass('active') ?
            (
                _target.parent().next('dd').stop().slideUp(),
                _target.parent().removeClass('active')
            ) : (
                _target.parent().addClass('active'),
                _target.parent().siblings().removeClass('active'),
                _target.closest('dl').children('dd').stop().slideUp(),
                _target.parent().next('dd').stop().slideDown()
            )
        ) : ( // 각각 제어
            _target.parent().hasClass('active') ?
            (
                _target.parent().next('dd').stop().slideUp(),
                _target.parent().removeClass('active')
            ) : (
                _target.parent().addClass('active'),
                _target.parent().next('dd').stop().slideDown()
            )
        )
}

function open_close (){
    $('.title li button').on('click', function(){
        $('.banner').css({"display":"block"})
        $('body').css({"overflow":"hidden"})
    })
    $('.banner em, .banner > dl > dt > img, .banner dd button').on('click', function(){
        $('.banner').css({"display":"none"})
        $('body').css({"overflow":"unset"})
    })
}
