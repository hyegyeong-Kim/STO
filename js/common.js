$(function(){
  /* include */
  $('header').load('./include/header.html');
  $('footer').load('./include/footer.html');
  /* //include */
  tab_active('.tab_wrap > ul', 'click')
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

