function scroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scroll();

function cursor(){
    let cursor = document.querySelector("#cursor");
let page1Content = document.querySelector("#page1-content");

page1Content.addEventListener("mousemove" , (el)=>{
    gsap.to("#cursor" ,  {
        x:el.x,
        y:el.y,
    })
})
page1Content.addEventListener("mouseenter" , function() {
    gsap.to("#cursor" , {
        scale: 1,
        opacity:1,
    })
})
page1Content.addEventListener("mouseleave" , function() {
    gsap.to("#cursor" , {
        scale: 0,
        opacity:0,
    })
})

}
cursor();
gsap.from("#page2 h2" , {
  y:100,
  duration:1.5,
  scrollTrigger:{
    trigger:("#page2 h2"),
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 20%",
    scrub:2,
  }
})

  let menu = gsap.timeline({
    stagger:0.1,
    
  })
  menu.to("#menu" , {
    y:650,
    duration:0.5,
  } , "time")
  menu.from("#vid-content h2" , {
    y:-100,
    opacity:0,
    duration:1
  }, "time")
  menu.from("#vid video" , {
  
    scale:0,
    duration:1
  }, "time")
  
  menu.from("#menu-items h2" , {
    y:200,
    duration:1,
    opacity:0,
    stagger:0.1,
  }, "time")
  menu.from("#men-but" , {
    y:100,
    delay:0.7,
    opacity:0,
    duration:1,
  }, "time")
 
  menu.from("#top-border-container " , {
    x:-3000,
    duration:2.5,
  }, "time")
  menu.from("#links " , {
    x:100,
    opacity:0,
    stagger:0.2,
    duration:1,
  }, "time")
  menu.from("#menu-bottom h2" , {
    x:-100,
    opacity:0,
    duration:1,
  }, "time")
menu.pause();

let menuicon = document.querySelector("#page1-content h4")
menuicon.addEventListener("click" , ()=>{
  menu.play();
})
let close = document.querySelector("#menu-right h1")
close.addEventListener("click" , ()=>{
  menu.reverse();
})

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:("#line1 h1"),
    scroller:"#main",
    start:"top 80%",
    end:"top 60%",
    ease: "power1.out",
    stagger:0.1,
    scrub:2,
  }
})
tl.from("#border" , {
  x:-1800,
  duration:35,
})
tl.from("#line1 h1" , {
  y:100,
  duration:2,
})
tl.from("#line2 h1" , {
  y:100,
  duration:2,
})
tl.from("#line3 h1" , {
  y:100,
  duration:2,
})
tl.from("#line4 h1" , {
  y:100,
  duration:2,
})
tl.from("#line5 h1" , {
  y:100,
  duration:2,
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:("#page4-line1 h1"),
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 30%",
    ease: "power1.out",
    stagger:0.1,
    scrub:2,
  }
})
tl3.from("#page4-upper-left h2" , {
  y:100,
  duration:2,
})
tl3.from("#page4-border" , {
  x:-1800,
  duration:22,
})
tl3.from("#page4-line1 h1" , {
  y:100,
  duration:2,
})
tl3.from("#page4-line2 h1" , {
  y:100,
  duration:2,
})
tl3.from("#page4-line3 h1" , {
  y:100,
  duration:2,
})
tl3.from("#page4-line4 h1" , {
  y:100,
  duration:2,
})
tl3.from("#page4-line5 h1" , {
  y:100,
  duration:2,
})
tl3.from("#page4-line6 h1" , {
  y:100,
  duration:2,
})
gsap.from("#nums" , {
  y:600,
  duration:10,
  scrollTrigger:{
    trigger:("#page5 svg"),
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 10%",
    ease: "power1.out",
    stagger:0.1,
    scrub:2,
  }
})
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
swiper();

let tl4 = gsap.timeline()
tl4.from("#loader h3" , {
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1,
})
tl4.to("#loader h3" , {
  x:-10,
  opacity:0,
  duration:1,
  stagger:0.1,
})

tl4.to("#loader" , {
  opacity:0,
})
tl4.from("#page1-content h3" , {
  x:100,
  opacity:0
} , "same")
tl4.from("#page1-content h4" , {
  x:-100,
  opacity:0
} , "same")
tl4.from("#page1-content h1 span" , {
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5,
} , "same")
tl4.to("#loader" , {
  display:"none",
})
let tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:("#footer"),
    scroller:"#main",
    start:"top 70%",
    // markers:true,
    end:"top 5%",
    ease: "power1.out",
    stagger:0.1,
    scrub:2,
  }
})
tl5.from("#footer-bottom h1 span" , {
  y:-100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:1,
})
tl5.from("#page6" , {
  boxShadow:"0 300px 80px black",
})
