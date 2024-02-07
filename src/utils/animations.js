import gsap from "gsap";

export const h1Animation = (target, duration) => {
    return gsap.from(target, { 
        duration: duration, 
        autoAlpha: 0
    })
}

export const h2Animation = (target, duration) => {
    return gsap.fromTo(target, {
        y: -15,
        autoAlpha: 0
    }, {
        duration: duration,
        y: 0,
        autoAlpha: 1
    })
}

export const imageAnimation = (target, duration) => {
    const q = gsap.utils.selector(target);
    const overlay = q('.overlay');
    const image = q('.image');
    const timeline = gsap.timeline();

    timeline
        .fromTo(overlay, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }, {
            duration: duration,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })
        .to(overlay, {
            duration: duration,
            left: "100%"
        })
        .fromTo(image, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }, {
            duration: duration,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, duration)

    return timeline;
}

export const articlesAnimation = (target, duration, stagger) => {
    return gsap.fromTo(target, {
        autoAlpha: 0
    }, {
        duration: duration,
        autoAlpha: 1,
        stagger: stagger
    })
}