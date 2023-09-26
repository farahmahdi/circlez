$(document).ready(function(){
    $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
    nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
    });
  });
 
  var swiper2 = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  let home=document.getElementById("home");
  let about=document.getElementById("about");
  let clients=document.getElementById("clients");
  let services =document.getElementById("services");
  let story=document.getElementById("story");
  let nav_link =document.querySelectorAll(".nav-link");
  let navlink =document.getElementsByClassName(".nav-link");
  const hero_sec=document.getElementById("hero");
 const about_sec=document.getElementById("about-circlez");
 const clients_sec=document.getElementById("partners");
 const services_sec=document.getElementById("Services");
 const story_sec=document.getElementById("Testimonials");
 let hieght ;
 const list1=[hero_sec,about_sec,clients_sec,services_sec,story_sec];
 const list2=[home,about,clients,services,story];
 window.onscroll=()=>{
  for(let i=0;i<list1.length;i++){
  let offset=window.scrollY;
  hieght=list1[i].offsetTop;
    if(offset >= hieght-90){
      list2.forEach(navlink =>{
          nav_link.forEach(navbtn => {
            navlink.classList.remove("active")
            list2[i].classList.add("active");
         });
      
      
       });
  }
} 
 }
 nav_link.forEach(navlink =>{
  navlink.addEventListener("click",function(){
    nav_link.forEach(navbtn => {
      navbtn.classList.remove("active")
     this.classList.add("active");
   });

  })
 });

  about.onclick = (event) => {
    hieght=about_sec.offsetTop,
    window.scrollTo({
        top:hieght-80,
        behavior: 'smooth',
    });
    event.preventDefault();
  }
   clients.onclick = (event) => {

    hieght=clients_sec.offsetTop,
    window.scrollTo({
      top:hieght-80,
        behavior: 'smooth'
    });
    event.preventDefault();
}
  services.onclick = (event) => {
   
    hieght=services_sec.offsetTop;
    window.scrollTo({
      top:hieght-80,
        behavior: 'smooth'
    });
    event.preventDefault();
  }
  story.onclick = (event) => {

    hieght=story_sec.offsetTop,
    window.scrollTo({
      top:hieght-80,
        behavior: 'smooth'
    });
   event.preventDefault();
  }
  $("#phoneField").CcPicker();
  $("#phoneField").CcPicker({
    "countryCode":"us"
  });
  $("#phoneField").CcPicker("setCountryByCode","es");
  $("#phoneField").CcPicker({
    dataUrl: "data.json"
  });