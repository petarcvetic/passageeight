console.log('dgsdsgs');
let anime = document.getElementById('animation');

const scrole = {
    curviness: 2.25,
    values: [
        { x: 0, y: anime.innerHeight / 2, scaleX: 1, scaleY: 1, opacity: 0.5 },
        { x: window.innerWidth / 2, y: anime.innerHeight / 2, scaleX: 2.5, scaleY: 2.5, opacity: 1 }
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to("#box", 1, {
        bezier: scrole,
        ease: Power1.easeInout
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: "#animation",
        duration: 5000,
        triggerHook: 0
    })
    .setTween(tween)
    .addIndicators()
    .setPin('#animation')
    .addTo(controller)