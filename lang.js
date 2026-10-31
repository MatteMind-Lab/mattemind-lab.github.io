(function(){var l;try{l=localStorage.getItem('lang')}catch(e){}
if(!l){var ls=navigator.languages||[navigator.language||'it'];l=String(ls[0]||'it').toLowerCase().indexOf('it')===0?'it':'en'}
var h=document.documentElement;h.lang=l;h.classList.toggle('en',l==='en');
window.setLang=function(n){try{localStorage.setItem('lang',n)}catch(e){}h.lang=n;h.classList.toggle('en',n==='en')}})();
