gsap.registerPlugin(ScrollTrigger);let sections=gsap.utils.toArray(".section");function toggleScrollTrigger(){window.innerWidth<1200?ScrollTrigger.getAll().forEach(e=>e.disable()):ScrollTrigger.getAll().forEach(e=>e.enable())}gsap.to(sections,{xPercent:-100*(sections.length-1),ease:"none",scrollTrigger:{trigger:".main-container",pin:!0,scrub:1,snap:1/(sections.length-1),end:"+=3500"}}),toggleScrollTrigger(),window.addEventListener("resize",toggleScrollTrigger);