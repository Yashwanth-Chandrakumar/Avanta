const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);


const button = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
}

button.onclick = () => toggle();

document.getElementById("myLink").onclick = function() {
  toggle();
  setTimeout(function() {
    const aboutElement = document.getElementById("left-side");
    aboutElement.scrollIntoView({
    behavior: "smooth",
    block: "start", // Vertical alignment: "start", "center", "end", or "nearest"
    inline: "nearest" // Horizontal alignment: "start", "center", "end", or "nearest"
  });

  }, 500);
}
document.getElementById("myLink1").onclick = function() {
  toggle();
  setTimeout(function() {
    const aboutElement = document.getElementById("about");
    aboutElement.scrollIntoView({
    behavior: "smooth",
    block: "start", // Vertical alignment: "start", "center", "end", or "nearest"
    inline: "nearest" // Horizontal alignment: "start", "center", "end", or "nearest"
  });

  }, 500);
}
document.getElementById("myLink2").onclick = function() {
  toggle();
  setTimeout(function() {
    const aboutElement = document.getElementById("eventssect");
    aboutElement.scrollIntoView({
    behavior: "smooth",
    block: "start", // Vertical alignment: "start", "center", "end", or "nearest"
    inline: "nearest" // Horizontal alignment: "start", "center", "end", or "nearest"
  });

  }, 500);
}
document.getElementById("myLink3").onclick = function() {
  toggle();
  setTimeout(function() {
    const aboutElement = document.getElementById("timeline");
    aboutElement.scrollIntoView({
    behavior: "smooth",
    block: "start", // Vertical alignment: "start", "center", "end", or "nearest"
    inline: "nearest" // Horizontal alignment: "start", "center", "end", or "nearest"
  });

  }, 500);
}
document.getElementById("myLink4").onclick = function() {
  toggle();
  setTimeout(function() {
    const aboutElement = document.getElementById("org");
    aboutElement.scrollIntoView({
    behavior: "smooth",
    block: "start", // Vertical alignment: "start", "center", "end", or "nearest"
    inline: "nearest" // Horizontal alignment: "start", "center", "end", or "nearest"
  });

  }, 500);
}
const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);

// for mobile ***************************************************
let paths = document.querySelector('.paths');
let pathLengths = paths.getTotalLength();
console.log("Path length: ", pathLengths);
paths.style.strokeDasharray = pathLengths + ' ' + pathLengths;
paths.style.strokeDashoffset = pathLengths;

// Assuming you have a div with the id 'line-container' that wraps the path
let lineContainers = document.getElementById('timeline');

let animationFrameIds;

function updatePaths() {
  console.log("updatePaths called");
  var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  console.log("scrollY: ", scrollY);
  console.log("scrollHeight: ", scrollHeight);
  
  var timelineRect = lineContainers.getBoundingClientRect();
  var startScrollPos = timelineRect.top + scrollY;
  console.log("startScrollPos: ", startScrollPos);
  
  if (scrollY <= startScrollPos) {
    paths.style.strokeDashoffset = pathLengths;
  } else {
    var scrollpercentage = (scrollY - startScrollPos) / (scrollHeight - startScrollPos);
    console.log("scrollpercentage: ", scrollpercentage);
    var drawLength = pathLengths * scrollpercentage*30;
    console.log("drawLength: ", drawLength);
    paths.style.strokeDashoffset = pathLengths - drawLength;
    console.log("New strokeDashoffset: ", pathLengths - drawLength);
  }
}

function onScrolls() {
  if (animationFrameIds) {
    cancelAnimationFrame(animationFrameIds);
  }
  animationFrameIds = requestAnimationFrame(updatePaths);
}

// Use 'touchmove' event for mobile devices
window.addEventListener('scroll', onScrolls);
window.addEventListener('touchmove', onScrolls);


// for pc timeline*****************************************************************************
let path = document.querySelector('.path');
let pathLength = path.getTotalLength();
console.log("Path length: ", pathLength);
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

// Assuming you have a div with the id 'line-container' that wraps the path
let lineContainer = document.getElementById('timeline');

let animationFrameId;

function updatePath() {
  console.log("updatePath called");
  var scrollY = window.scrollY || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log("scrollY: ", scrollY);
  console.log("scrollHeight: ", scrollHeight);
  
  var timelineRect = lineContainer.getBoundingClientRect();
  var startScrollPos = timelineRect.top + scrollY;
  console.log("startScrollPos: ", startScrollPos);
  
  if (scrollY <= startScrollPos) {
    path.style.strokeDashoffset = pathLength;
  } else {
    var scrollpercentage = (scrollY - startScrollPos) / (scrollHeight - startScrollPos);
    console.log("scrollpercentage: ", scrollpercentage);
    var drawLength = pathLength * scrollpercentage*2;
    console.log("drawLength: ", drawLength);
    path.style.strokeDashoffset = pathLength - drawLength;
    console.log("New strokeDashoffset: ", pathLength - drawLength);
  }
}



function onScroll() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(updatePath);
}

window.addEventListener('scroll', onScroll);


gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 50%',
                        end: 'top 10%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
    
  });
});

const hiddenElement = document.querySelectorAll('.title');
hiddenElement.forEach((el) => observers.observe(el));

// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)