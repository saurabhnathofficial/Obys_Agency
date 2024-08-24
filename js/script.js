
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

// let section = document.querySelector("#video_container");

// section.addEventListener("mousemove",function(d){
//     gsap.to("#video_container .play",{
//         left:d.x,
//         top:d.y,
//     })
// })

// figure.addEventListener("mouseleave",function(d){
//     gsap.to("#video_container .play",{
    
//     })
// })
















cursor();
loadingAnimation();
makeMagnet();
hoverEffact();
small_scroll();