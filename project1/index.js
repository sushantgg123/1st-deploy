const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: '0',
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    });
}

function circleskew() {
    let xprev = window.innerWidth / 2;
    let yprev = window.innerHeight / 2;

    window.addEventListener("mousemove", function(dets) {
        const xdiff = dets.clientX - xprev;
        const ydiff = dets.clientY - yprev;
        
        const xscale = gsap.utils.clamp(0.8, 1.2, 1 + xdiff * 0.005);
        const yscale = gsap.utils.clamp(0.8, 1.2, 1 + ydiff * 0.005);

        xprev = dets.clientX;
        yprev = dets.clientY; 

        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            scale: 0.8, 
            ease: Power3.easeOut,
            duration: 0.5,
        });
    });
  
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            scale: 1, 
            ease: Power3.easeOut,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-10, 10, diffrot * 0.2),
            duration: 0.3,
        });
    });
});

firstPageAnim();
circleskew();
