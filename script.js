/* ==========================================================
        SR KISHAN KUMAR PORTFOLIO
        Professional JavaScript
        Part 1
========================================================== */


/* ==========================================================
        PRELOADER
========================================================== */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


/* ==========================================================
        STICKY NAVBAR
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";
        header.style.backdropFilter = "blur(20px)";

    }

    else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


/* ==========================================================
        SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================================
        ACTIVE NAVIGATION
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================================
        SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

".about-box,.skill-card,.project-card,.certificate-card,.timeline-item,.internship-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.2

}

);

revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(60px)";

element.style.transition=".8s ease";

revealObserver.observe(element);

});


/* ==========================================================
        SCROLL TO TOP
========================================================== */

const topButton = document.createElement("button");

topButton.id = "topBtn";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================================
        HERO TYPING EFFECT
========================================================== */

const typingText = [

"Artificial Intelligence Engineer",

"Machine Learning Enthusiast",

"Data Science Student",

"Flutter Developer"

];

let index=0;

let char=0;

const heroTitle=document.querySelector(".hero h2");

function typeEffect(){

if(!heroTitle) return;

heroTitle.innerHTML=typingText[index].substring(0,char)+"|";

char++;

if(char<=typingText[index].length){

setTimeout(typeEffect,100);

}

else{

setTimeout(eraseEffect,1800);

}

}

function eraseEffect(){

heroTitle.innerHTML=typingText[index].substring(0,char)+"|";

char--;

if(char>=0){

setTimeout(eraseEffect,50);

}

else{

index++;

if(index>=typingText.length){

index=0;

}

setTimeout(typeEffect,400);

}

}

typeEffect();


/* ==========================================================
        FOOTER YEAR
========================================================== */

const footerText=document.querySelector(".footer-bottom p");

if(footerText){

footerText.innerHTML=

`© ${new Date().getFullYear()} SR Kishan Kumar. All Rights Reserved.`;

}


/* ==========================================================
        SCROLL PROGRESS BAR
========================================================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#2563EB";

progress.style.zIndex="99999";

window.addEventListener("scroll",()=>{

let totalHeight=document.documentElement.scrollHeight-window.innerHeight;

let progressWidth=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressWidth+"%";

});


/* ==========================================================
        CONSOLE MESSAGE
========================================================== */

console.log("%cPortfolio Loaded Successfully 🚀",

"color:#2563EB;font-size:18px;font-weight:bold;");
/* ==========================================================
        PROFESSIONAL JAVASCRIPT
        PART 2
========================================================== */


/* ==========================================================
        DARK MODE
========================================================== */

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.id = "darkMode";

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "100px";
darkBtn.style.right = "30px";
darkBtn.style.width = "55px";
darkBtn.style.height = "55px";
darkBtn.style.borderRadius = "50%";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";
darkBtn.style.background = "#2563EB";
darkBtn.style.color = "#fff";
darkBtn.style.fontSize = "20px";
darkBtn.style.boxShadow = "0 15px 30px rgba(0,0,0,.2)";
darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

let dark = false;

darkBtn.addEventListener("click", () => {

    dark = !dark;

    if (dark) {

        document.body.style.background = "#0F172A";
        document.body.style.color = "#ffffff";

        document.querySelectorAll(".project-card,.skill-card,.about-box,.certificate-card,.timeline-content,.contact-form,.internship-card,.tech-card")
            .forEach(card => {

                card.style.background = "#1E293B";
                card.style.color = "#ffffff";

            });

        darkBtn.innerHTML = "☀️";

    } else {

        location.reload();

    }

});


/* ==========================================================
        MOBILE MENU
========================================================== */

const navbar = document.querySelector(".navbar");

const menu = document.querySelector(".nav-menu");

const menuBtn = document.createElement("div");

menuBtn.innerHTML = "☰";

menuBtn.style.fontSize = "30px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none";

navbar.appendChild(menuBtn);

function mobileMenu() {

    if (window.innerWidth <= 768) {

        menuBtn.style.display = "block";

        menu.style.display = "none";

        menuBtn.onclick = () => {

            if (menu.style.display == "flex") {

                menu.style.display = "none";

            } else {

                menu.style.display = "flex";
                menu.style.flexDirection = "column";
                menu.style.marginTop = "20px";

            }

        }

    }

}

mobileMenu();

window.addEventListener("resize", mobileMenu);


/* ==========================================================
        CONTACT FORM
========================================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() == "") {

                input.style.border = "2px solid red";

                valid = false;

            }

            else {

                input.style.border = "1px solid #ccc";

            }

        });

        if (valid) {

            alert("Thank You! Your message has been recorded.");

            form.reset();

        }

    });

}


/* ==========================================================
        ANIMATED COUNTERS
========================================================== */

const numbers = document.querySelectorAll(".about-box p");

numbers.forEach(number => {

    const target = parseInt(number.innerText);

    if (!isNaN(target)) {

        let count = 0;

        const timer = setInterval(() => {

            count++;

            number.innerText = count;

            if (count >= target) {

                clearInterval(timer);

            }

        }, 40);

    }

});


/* ==========================================================
        BUTTON RIPPLE
========================================================== */

document.querySelectorAll("button,.primary-btn,.secondary-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "20px";
        ripple.style.height = "20px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.5)";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.transform = "scale(0)";
        ripple.style.transition = ".6s";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.style.transform = "scale(15)";
            ripple.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================================================
        PARALLAX EFFECT
========================================================== */

document.addEventListener("mousemove", e => {

    const image = document.querySelector(".image-card");

    if (image) {

        let x = (window.innerWidth / 2 - e.pageX) / 35;

        let y = (window.innerHeight / 2 - e.pageY) / 35;

        image.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

    }

});


/* ==========================================================
        ACTIVE SHADOW
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";

    }

});


/* ==========================================================
        KEYBOARD SHORTCUT
========================================================== */

document.addEventListener("keydown", e => {

    if (e.key == "d" || e.key == "D") {

        darkBtn.click();

    }

});


/* ==========================================================
        PAGE LOADED
========================================================== */

window.onload = () => {

    console.log("Portfolio Ready 🚀");

};