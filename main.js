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
    strings: ['your fav podcasts.', 'trending episodes.','your fav Topics.','lastest episodes.'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
  });
  

  window.addEventListener('load',()=>{
    
    const loader = document.querySelector('#loader')
    loader.classList.add('loader--hiden')
    setTimeout(hideLoder,1000)

    function hideLoder (){
        loader.classList.add('lodar--none')
}


loader.addEventListener('transitionend',()=>{
     // document.body.removeChild(loader)

     loader.remove()
})

})