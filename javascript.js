
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let yOffset;
        if(window.matchMedia("(max-width: 730px)").matches)
        {
          yOffset=0;
          console.log(1);
        }
        else {
          yOffset=-60;
          console.log(3);
        }

        const cont=document.querySelector(this.getAttribute('href'));

        const y = cont.getBoundingClientRect().top + window.pageYOffset + yOffset;
console.log(y);
        window.scrollTo({top: y, behavior: 'smooth'});

    });
});


let count=0;
const el = document.querySelector('html');
window.onscroll = changebgrd;
function changebgrd()
{

  if(el.scrollTop===0)
  {
    count= 0;
    let p=1;
    let n=setInterval(function() {
      if(p<0)
      {

          clearInterval(n);
      }
      else {

          document.getElementsByTagName("header")[0].style.backgroundColor='rgb(75,13,130,'+p+')';
          p=p-0.01;

      }

    },5);

  }
  else if(count===0)
  {
    count= 1;
    let p=0;
    let n=setInterval(function() {
      if(p>1)
      {

          clearInterval(n);
      }
      else {

          document.getElementsByTagName("header")[0].style.backgroundColor='rgb(75,13,130,'+p+')';
          p=p+0.01;

      }

    },5);


  }

}

window.addEventListener('load', (event) => {
  const target = document.getElementsByClassName("content");
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
const backgrnd = document.getElementsByClassName('load-image-wrapper');
backgrnd[0].addEventListener('transitionend', (event) => {
  backgrnd[0].style.display = 'none';
});


  //target.addEventListener('click', () => target.style.opacity = '0');
  // If you want to remove it from the page after the fadeout
  //target.addEventListener('transitionend', () => target.remove());


function fadeload() {
  const target = document.getElementsByClassName('content');
  const backgrnd = document.getElementsByClassName('load-image-wrapper');
  target.addEventListener('onload', function(){
    backgrnd[0].style.backgroundColor = null;
    backgrnd[0].style.opacity = 1;
    console.log(2);
  });

}
(function() {
  let elements;
  let windowHeight;
  let icon1;
  let icon2;
  let icon3;
  let start;
  let initial;
  let final;
  function init() {
    elements=document.getElementsByClassName('hidden');
    windowHeight = window.innerHeight;
    icon1=document.getElementsByClassName('icon1');
    icon2=document.getElementsByClassName('icon2');
    icon3=document.getElementsByClassName('icon3');
    start=document.getElementsByClassName('listinit');
    initial=document.getElementsByClassName('listinitial');
    final=document.getElementsByClassName('listinitial');
  }

  function checklist() {
    if(start.length!==0)
    { let element=document.getElementsByClassName('listinit')
      element.classList.add('fade-in-element');
      element.classList.remove('hidden');
    }

  }
  function checkPosition() {


    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if(positionFromTop!==0)
      {
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
    for (let i = 0; i < icon1.length; i++) {
      let element = icon1[i];
      let positionFromTop = icon1[i].getBoundingClientRect().top;

      if(positionFromTop!==0)
      {
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('iconload1');
          element.classList.remove('icon1');
        }
      }
    }
    for (let i = 0; i < icon2.length; i++) {

      let element = icon2[i];
      let positionFromTop = icon2[i].getBoundingClientRect().top;

      if(positionFromTop!==0)
      {
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('iconload2');
          element.classList.remove('icon2');
        }
      }
    }
    for (let i = 0; i < icon3.length; i++) {
      let element = icon3[i];
      let positionFromTop = icon3[i].getBoundingClientRect().top;

      if(positionFromTop!==0)
      {
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('iconload3');
          element.classList.remove('icon3');
        }
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('onload', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

/*window.addEventListener('load', () => {
  console.log(1);
  const resize1=document.getElementsByClassName('Completelangwrapper');
  resize1[0].style.height=(window.innerHeight-500);
});
window.addEventListener('resize',  () => {
  document.getElementsByClassName('Completelangwrapper')[0].style.height=(window.innerHeight-200);
});

resize1.addEventListener('onload', function() {
  resize1.style.height=(window.innerHeight-60);

})
*/
/*function()
{

let counticon=0;
let menuicon;
function initicon() {
  menuicon=document.getElementsByClassName("menudropdown");
}
function clickicon() {

}


}
*/





/*
let x = window.matchMedia("(max-width: 730px)");
function myFunction(x) {
  if (x.matches)
  {

    console.log(1);
  }
  else
  {


  }
}
*/
