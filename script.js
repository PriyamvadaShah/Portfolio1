let div1=document.querySelector("#firstdiv");
div1.addEventListener("mouseover", ()=>{ 
    div1.style.transitionTimingFunction = "ease-out";
    div1.style.transitionDuration = "0.8s";
    div1.style.opacity="0.75";
    div1.style.borderRadius="20px";
    div1.style.color="white";
    div1.style.transform="scale(1.009)";
});
div1.addEventListener("mouseout", ()=>{
    div1.style.opacity="1";
    div1.style.borderRadius="0px";
    div1.style.transform="scale(1)";
});


let div3=document.querySelector(".heading");

let div2=document.querySelector("#Aboutdiv");
div2.addEventListener("mouseover", ()=>{ 
    div2.style.transitionTimingFunction = "ease-out";
    div3.style.fontSize="rem";
    div2.style.transitionDuration = "0.8s";
    div2.style.opacity="1.5rem";
    div2.style.borderRadius="20px";
    div2.style.color="white";
    div2.style.opacity="1";
    div2.style.transform="scale(1.005)";
});
div2.addEventListener("mouseout", ()=>{
    div2.style.opacity="0.9";
    div2.style.borderRadius="0px";
    div2.style.transform="scale(1)";
    div3.style.fontSize="1.2rem";
});


let div4=document.querySelector("#Education");
div4.addEventListener("mouseover", ()=>{ 
    div4.style.transitionTimingFunction = "ease-out";
    div4.style.transitionDuration = "0.8s";
    div4.style.opacity="1";
    div4.style.borderRadius="20px";
    div4.style.color="white";
    div4.style.transform="scale(1.005)";
});
div4.addEventListener("mouseout", ()=>{
    div4.style.opacity="0.9";
    div4.style.borderRadius="0px";
    div4.style.transform="scale(1)";
});


let div5=document.querySelector("#Position");
div5.addEventListener("mouseover", ()=>{ 
    div5.style.transitionTimingFunction = "ease-out";
    div5.style.transitionDuration = "0.8s";
    div5.style.opacity="1";
    div5.style.borderRadius="20px";
    div5.style.color="white";
    div5.style.transform="scale(1.005)";
});
div5.addEventListener("mouseout", ()=>{
    div5.style.opacity="0.9";
    div5.style.borderRadius="0px";
    div5.style.transform="scale(1)";
});


let div6=document.querySelector("#Projects");
div6.addEventListener("mouseover", ()=>{ 
    div6.style.transitionTimingFunction = "ease-out";
    div6.style.transitionDuration = "0.8s";
    div6.style.opacity="1";
    div6.style.borderRadius="20px";
    div6.style.color="white";
    div6.style.transform="scale(1.005)";
});
div6.addEventListener("mouseout", ()=>{
    div6.style.opacity="0.9";
    div6.style.borderRadius="0px";
    div6.style.transform="scale(1)";
});


let div7=document.querySelector("#Contactme");
div7.addEventListener("mouseover", ()=>{ 
    div7.style.transitionTimingFunction = "ease-out";
    div7.style.transitionDuration = "0.8s";
    div7.style.opacity="1";
    div7.style.borderRadius="20px";
    div2.style.color="white";
    div7.style.transform="scale(1.005)";
});
div7.addEventListener("mouseout", ()=>{
    div7.style.opacity="0.9";
    div7.style.borderRadius="0px";
    div7.style.transform="scale(1)";
});

let div8=document.querySelector("#aboutme");
div8.addEventListener("mouseover", ()=>{
    div8.style.transition="ease-in";
    div8.style.fontSize="1.55rem";
    div8.style.transitionDuration = "1s";
    div8.style.opacity="0.9";
    div8.style.color="lightblue";
    div8.textContent="About me: My journey, strengths and aspirations";   
});
div8.addEventListener("mouseout",()=>{
    div8.style.fontSize="1.5rem";
    div8.style.opacity="1";
    div8.style.color="white";
    div8.textContent="About me";   
});

let div9=document.querySelector("#education");
div9.addEventListener("mouseover", ()=>{
    div9.style.fontSize="1.55rem";
    div9.style.transitionDuration = "1s";
    div9.style.opacity="0.9";
    div9.style.color="lightblue"; 
    div9.textContent="Education: Current and past qualifications";      
});
div9.addEventListener("mouseout",()=>{
    div9.style.fontSize="1.5rem";
    div9.style.opacity="1";
    div9.style.color="white";
    div9.textContent="Education";   
});

let div12=document.querySelector("#positions");
div12.addEventListener("mouseover", ()=>{
    div12.style.fontSize="1.58rem";
    div12.style.transitionDuration = "1s";
    div12.style.opacity="0.7";
    div12.style.color="lightblue";
    div12.textContent="Positions of Responsibility: My Achievements";   
});
div12.addEventListener("mouseout",()=>{
    div12.style.fontSize="1.5rem";
    div12.style.opacity="1";
    div12.style.color="white";
    div12.textContent="Positions of Responsibility";   

});
