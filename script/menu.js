const menuTimeline=gsap.timeline({paused:!0,defaults:{duration:.7,ease:"power2.inOut"}}),toggleMenuButton=(menuTimeline.to("#menu",{left:0}).from("#menu ul li",{opacity:0,y:-20,stagger:.1},"<"),document.getElementById("toggle-menu")),closeMenuButton=(toggleMenuButton.addEventListener("click",()=>{menuTimeline.play()}),document.getElementById("close-menu"));closeMenuButton.addEventListener("click",()=>{menuTimeline.reverse()});