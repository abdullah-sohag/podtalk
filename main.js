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
  