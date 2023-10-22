
let interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1))+min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

const stars = document.getElementsByClassName("magic-star");

let index = 0;
for (const star of stars) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), interval);
}, index++ * (interval / 3));
}
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let inter = null;

document.getElementById("register").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(inter);
  
  inter = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(inter);
    }
    
    iteration += 1 / 3;
  }, 30);
}
const hackathonWords = ["ASPIRE", "ACHIEVE", "CODE", "INNOVATE", "COMPETE", "COLLABORATE", "CHALLENGE", "HACK", "PROTOTYPE", "ASPIRE", "AVANTA"];

let iteration = 0;
let inters;
const avantaElement = document.getElementById("avanta");

avantaElement.onmouseover = event => {
  clearInterval(inters);
  iteration = 0;

  inters = setInterval(() => {
    if (iteration < hackathonWords.length-1) {
      avantaElement.style.opacity = 0;
      setTimeout(() => {
        avantaElement.innerText = hackathonWords[iteration];
        avantaElement.style.opacity = 1;
      }, 100); // Adjust the timing as needed
    } else {
      clearInterval(inters);
    }
    iteration++;
  }, 500); // Adjust the timing as needed
};

const logo = document.getElementById("logot"),
      images = logo.querySelectorAll("h2");

const getActive = () => document.body.dataset.active === "true",
      setActiveTo = active => document.body.dataset.active = active;

const shift = (image, index, rangeX, rangeY) => {
  const active = getActive();
        
  const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
  
  const scale = active ? 1 + (index * 0.4) : 1;
  
  image.animate({ 
    translate: currentTranslation, 
    scale 
  }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (images, rangeX, rangeY) => 
  images.forEach((image, index) => shift(image, index, rangeX, rangeY));

const shiftLogo = (e, images) => {  
  const rect = logo.getBoundingClientRect(),
        radius = 1000;
  
  const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);
  
  const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;
  
  shiftAll(images, rangeX, rangeY);
}

const resetLogo = () => {
  setActiveTo(false);
  shiftAll(images, 0.4, -0.7);
}

window.onmousemove = e => shiftLogo(e, images);

document.body.onmouseleave = () => {
  if(!getActive()) resetLogo();
}

window.onmousedown = e => {
  setActiveTo(true);
  shiftLogo(e, images);
}

window.onmouseup = e => resetLogo();

resetLogo();

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.getBoundingClientRect().top;
      sectionId = current.getAttribute('id')
      console.log(sectionHeight);
      console.log(sectionTop);
      console.log(sectionTop + sectionHeight);
      console.log(scrollY);
      console.log("next");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            if(sectionId=="#home") {
                document.getElementById('h1').innerHTML="h";
                document.getElementById('h2').innerHTML="h";
            }
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
            
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


