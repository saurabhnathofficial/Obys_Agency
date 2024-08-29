
function locomotive_js(){
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









function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from(".line .line_item, .line h2", {
        opacity: 0,
        onStart: function () {
            var counter = document.querySelector(".line_item h4")
            let flag = 0;
            setInterval(function () {
                if (flag < 100) {
                    counter.innerHTML = flag++;
                } else {
                    counter.innerHTML = "100";
                }
            }, 30);
        }
    })

    tl.to("#loader", {
        opacity: 0,
        delay: 4,
        duration: 0.4,
    })
    tl.from("#home", {
        delay: 0.5,
        y: 1600,
        opacity: 0,
        duration: 0.9,
    })
    tl.to("#loader", {
        display: "none",
    })

    // end of loader

    tl.from("#hero .hero_child h2", {
        y: 100,
        stagger: 0.2,
        opacity: 0
    })


}

function cursor() {
    document.addEventListener("mousemove", function (dts) {
        gsap.to("#cursor", {
            left: dts.x,
            top: dts.y,
        })
    })
}

function small_scroll() {


    let scroll = document.querySelector(".scroll p");
    gsap.to(scroll, {
        opacity: 1,
        y: 30,
        delay: .5,
        duration: 2.5,
        repeat: -1,
        ease: true
    });

}

function makeMagnet() {
    Shery.makeMagnet("#nav ul li", {
        //Parameters are optional.
        ease: "cubic-bezier(0.50, 1, 0.320,1)",
        duration: 1,
    });
    Shery.makeMagnet("#nav nav_part1 a", {
        //Parameters are optional.
        ease: "cubic-bezier(0.50, 1, 0.320,1)",
        duration: 1,
    });
}

function hoverEffact() {

    let card = document.querySelector("#card")
    let aaa = document.querySelector("#unique");
    let a1 = aaa.querySelectorAll("a")

    a1.forEach(function (a) {
        a.addEventListener("mousemove", function (d) {
            card.style.opacity = 1;
            gsap.to("#card", {
                left: d.x,
                top: d.y,
            });
        });
        a.addEventListener("mouseleave", function () {
            card.style.opacity = 0;
        });
    });
}

function section() {

    let section = document.querySelector("#page1 .video_container");

    section.addEventListener("mousemove", function (d) {
        gsap.to(".video_container .play", {
            left: d.x - "440",
            top: d.y - "285",
        })
    })
    section.addEventListener("mouseleave", function (d) {
        gsap.to(".video_container .play", {
            left: "50%",
            top: "50%",

        })
    })

}

let slide1 = document.querySelectorAll(".marque_text .row .slide");
let slide2 = document.querySelectorAll(".marque_text .row .slide2");

slide1.forEach(function(e){
    gsap.to(e,{
        transform: "translateX(0%)",
        duration:8,
        scrollTrigger:{
            trigger: ".marque_text",
            scroller: "body",
            scrub:3
        }
    })
})
slide2.forEach(function(e){
    gsap.to(e,{
        transform: "translateX(0%)",
        duration:10,
        scrollTrigger:{
            trigger: ".marque_text",
            scroller: "body",
            scrub:3
        }
    })
})














locomotive_js();


cursor();
loadingAnimation();
makeMagnet();
hoverEffact();
small_scroll();
section();