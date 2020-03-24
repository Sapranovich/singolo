// Переключение меню
// const MENU = document.getElementById('menu');
// const SECTION = document.querySelectorAll('section');
// const ARR = document.querySelectorAll('nav > ul > li>a');
// let i=0;

// MENU.addEventListener('click', (event)=> {
// 	MENU.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
// 	event.target.classList.add('active');

// });

// window.addEventListener('scroll', function(){
  
// });



document.addEventListener('scroll', onScroll);


function onScroll(event){
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('main > section');
    const links = document.querySelectorAll('nav > ul > li > a');


    sections.forEach((el)=>{
      if((el.offsetTop -30) <= curPos && (el.offsetTop + el.offsetHeight + '100') > curPos){
         links.forEach((a)=>{
           a.classList.remove('active');
           if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
              a.classList.add('active');
           }
         })
      }
    });
}


const BURGER = document.querySelector('.menu-btn');
const MENU = document.querySelector('.header-menu');
const LOGO = document.querySelector('.header-logo');
const SHADOW =document.querySelector('.shadow-header-menu');
let n = 0;

BURGER.addEventListener('click', (event) =>{
    if(n == 0){
      BURGER.style.transform = 'rotate(90deg)';
      MENU.style.display = 'block';
      SHADOW.style.display = 'block';
      LOGO.style.left = '154px';
      n=1;
    }else {
      BURGER.style.transform = 'rotate(0deg)';
      MENU.style.display = 'none';
      SHADOW.style.display = 'none';
      LOGO.style.left = '50%';
      n=0;
    }; 

});




// ________________________________________________________________________________________________________________________________
// Включение и отключение экранов  
const SCREENh = document.querySelector('.phone-off-horizontal');
const SCREENv = document.querySelector('.phone-off-vertical');
// const SCREENvh =document.querySelector('.slider__list');
let k=0;
// SCREENvh.querySelector('a');
SCREENh.addEventListener('click', (event)=>{
    if(k==0){ 
    	SCREENh.style.background ='rgba(0,0,0,0.0)';
    	k=1;
    }else {
    	SCREENh.style.background ='rgba(0,0,0,1.0)';
    	k=0;
    };
});

SCREENv.addEventListener('click', (event)=>{
    if(k==0){ 
    	SCREENv.style.background ='rgba(0,0,0,1.0)';
    	k=1;
    }else {
    	SCREENv.style.background ='rgba(0,0,0,0)';
    	k=0;
    };
});
// ________________________________________________________________________________________________________________________________
// Кнопки портфолио
const PORTFOLIO_BTN = document.querySelector('.portfolio-btn-box');
// const PORTFOLIO_BTN = document.getElementById('portfolio-btn-box-btn');

PORTFOLIO_BTN.addEventListener('click', (event)=> {
  PORTFOLIO_BTN.querySelectorAll('button').forEach(el=>el.classList.remove('active-btn'));
  PORTFOLIO_BTN.querySelectorAll('button').forEach(el=>el.removeAttribute('disabled'));
  event.target.classList.add('active-btn');
  event.target.setAttribute('disabled','disabled');

});

// ____________________________________________________________________________________________________________________________________
// Рамка на картинках и вызов функции перемешивания картинок
const PORTFOLIO_ITEMS = document.getElementById('portfolio-items-id');

PORTFOLIO_ITEMS.addEventListener('click', (event)=>{
    PORTFOLIO_ITEMS.querySelectorAll('img').forEach(el=> el.parentNode.classList.remove('border'));
    event.target.parentNode.classList.add('border');
});


PORTFOLIO_BTN.querySelectorAll('button').forEach(el => el.onclick=SortPhoto);

function SortPhoto(){
  let clonePhoto = PORTFOLIO_ITEMS.children[0].cloneNode(true);
  PORTFOLIO_ITEMS.appendChild(clonePhoto);
  PORTFOLIO_ITEMS.removeChild(PORTFOLIO_ITEMS.children[0]);
};

// ________________________________________________________________________________________________________________________________
// Карусель с закицливанием
let slideWidth = 100; 
const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('#prev_slide');
const btnNext = document.querySelector('#next_slide');
let pos = 0;

sliderList.style.width = slides.length * slideWidth + 'vw';

btnPrev.onclick = scrollToPrev;
btnNext.onclick = scrollToNext;

function scrollToPrev() {
  pos--;
  if (pos < 0) {
    sliderList.style.transition = null;
    sliderList.style.left = -(pos + 2) * slideWidth + 'vw';
    let cloneElem = sliderList.children[slides.length - 1].cloneNode(true);
    sliderList.insertBefore(cloneElem, sliderList.children[0]);
    sliderList.removeChild(sliderList.children[slides.length]);
    pos++;
  };
  
  setTimeout(function() {
    sliderList.style.left = -(slideWidth * pos) + 'vw';
    sliderList.style.transition = 'left 1s ease-in-out';
  });

};

function scrollToNext() {
  pos++;
  if (pos > slides.length - 1) {
    sliderList.style.transition = null;
    sliderList.style.left = -(pos - 2) * slideWidth + 'vw';
    let cloneElem = sliderList.children[0].cloneNode(true);
    sliderList.appendChild(cloneElem);
    sliderList.removeChild(sliderList.children[0]);
    pos--;
  };
  
  setTimeout(function() {
    sliderList.style.left = -(slideWidth * pos) + 'vw';
    sliderList.style.transition = 'left 1s ease-in-out';
  });
  
};
// __________________________________________________________________________________-
// Модальное окно
const SUBMIT = document.getElementById('btn');
const CLOSE_SUBMIT = document.getElementById('close-btn');
const NAME = document.getElementById('name');
const EMAIL = document.getElementById('email');
const SUBJECT =document.getElementById('subject');
const FORM = document.querySelector('form');
// const FORM =document.querySelector('form');
// NAME.value !== '' && EMAIL.value !== ''
SUBMIT.addEventListener('click',()=>{
  if(NAME.reportValidity() && EMAIL.reportValidity() ) {


  const SUBJECT =document.getElementById('subject').value.toString();
  const DESCRIBE =document.getElementById('describe').value.toString();


  if(!SUBJECT==''){
    document.getElementById('result-subject').innerText= 'Тема: '+ SUBJECT;
  }else document.getElementById('result-subject').innerText= 'Без темы';

  if(!DESCRIBE ==''){
    document.getElementById('result-describe').innerText= 'Описание: '+ DESCRIBE;
  }else document.getElementById('result-describe').innerText= 'Без описания';

  document.getElementById('message-block').classList.remove('hidden');
}
});

CLOSE_SUBMIT.addEventListener('click',()=>{
  document.getElementById('result-subject').innerText= '';
  document.getElementById('result-describe').innerText= '';
  document.getElementById('message-block').classList.add('hidden');
  FORM.querySelectorAll('input, textarea').forEach(el=>el.value = '');
});