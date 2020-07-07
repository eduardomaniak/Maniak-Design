var tl = new TimelineMax();

tl.from(".hero-h1", .6, { ease: Power2.easeInOut, y: 100, opacity: 0}, .55);
tl.from(".hero-h2", .6, { ease: Power2.easeInOut, y: 100, opacity: 0}, .65);
tl.from(".hero-h4", .3, { ease: Power2.easeInOut, opacity: 0}, 1);
tl.from(".feed-container", .7, { ease: Power2.easeOut, y: 100, opacity: 0}, 1.1);