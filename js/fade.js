$(function() {
  
  $('[data-scrollmagic]').each(function (index, elem) {
    var scrollMagicController = new ScrollMagic();
     
    var title = $(elem).find('h1'),
        text = $(elem).find('p'),
        btn = $(elem).find('svg'),
        btn = $(elem).find('h2'),
        btn = $(elem).find('video'),
      btn = $(elem).find('img');
    
    var tl = new TimelineMax({pause: true});    
    tl.add("start") 
      .fromTo(title, 0.9, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(text, 0.9, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.9, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
    
    var scene = new ScrollScene({
      triggerElement: elem,
      offset: 0 
    })
    .setTween(tl)
    .addTo(scrollMagicController);

     scene.addIndicators(); 
  });
});