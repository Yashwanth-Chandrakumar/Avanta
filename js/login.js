function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password-input");
    const passwordToggle = document.querySelector(".password-toggle");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.style.fill = "#2d79f3"; 
    } else {
      passwordInput.type = "password";
      passwordToggle.style.fill = ""; 
    }
  }
function togglePasswordVisible() {
    const passwordInput = document.getElementById("password-inputed");
    const passwordToggle = document.querySelector(".password-toggled");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.style.fill = "#2d79f3"; 
    } else {
      passwordInput.type = "password";
      passwordToggle.style.fill = ""; 
    }
  }
  

function signup() {
    const element = document.querySelector(".signup");
    const page = document.querySelector(".signin");

    if (element) {
        element.style.display = "block";
        page.style.display = "none"; // Or use "inline" if it's an inline element
    }
    console.log("clicked");
 }
function signin(){
    const element = document.querySelector(".signup");
    const page = document.querySelector(".signin");

    if (element) {
        element.style.display = "none";
        page.style.display = "block"; // Or use "inline" if it's an inline element
    }
 }



const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
    const bubble = document.createElement("div");
    
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);
