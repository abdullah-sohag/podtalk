let splide = new Splide( '.splide', {
    perPage: 3,
    rewind : true,
    type   : 'loop',
    perMove: 1,
    focus  : 'center',
    autoplay: true,
    gap    : '.5rem',
  } );
  
  splide.mount();


  VanillaTilt.init(document.querySelectorAll(".topic-card"), {
		max: 25,
		speed: 400
	});


  AOS.init();


  let typed = new Typed('.auto-typx', {
    strings: ['fav podcasts', 'trending episodes','fav Topics','lastest episodes'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
  });
  