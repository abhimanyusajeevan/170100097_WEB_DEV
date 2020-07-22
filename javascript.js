
const hash=document.querySelector('a[href^="#About"]');
hash.onclick = function()
{
  setTimeout(function() {
      {
          window.scrollBy(0,-60);
      }
  },1);
};
const el = document.querySelector('html');
window.onscroll = changebgrd;
function changebgrd()
{
  if(el.scrollTop!==0)
  {
    document.getElementsByTagName("header")[0].style.backgroundColor='#5E2A69';
}
  else
  {
    document.getElementsByTagName("header")[0].style.backgroundColor=null;
  }
}

window.addEventListener('load', (event) => {
  const target = document.getElementsByClassName("content")
  if(target[0].style.display !== 'block')
  {

    target[0].style.display = 'block';

  }

});
window.addEventListener('load', (event) => {
  const target = document.getElementsByClassName('content');
  const backgrnd = document.getElementsByClassName('load-image-wrapper');
  if(target[0].style.display === "block")
  {
  backgrnd[0].style.backgroundColor = null;
  backgrnd[0].style.opacity = 0;
  console.log(2);
}
});


  //target.addEventListener('click', () => target.style.opacity = '0');
  // If you want to remove it from the page after the fadeout
  //target.addEventListener('transitionend', () => target.remove());


function fadeload() {
  const target = document.getElementsByClassName('content');
  const backgrnd = document.getElementsByClassName('load-image-wrapper');
  target.addEventListener('onload', function(){
    backgrnd.style.backgroundColor = null;
    backgrnd.style.opacity = 0;
    console.log(2);
  });

}
let = window.matchMedia("(max-width: 730px)");
function myFunction(x) {
  if (x.matches)
  {

    document.getElementsByClassName('description').style.display = hidden;
  }
  else
  {

    document.getElementsByClassName('description').style.display= visible;
  }
}
