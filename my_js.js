var container = document.querySelector('.media');
  var hammertime = new Hammer(container);

  hammertime.on('swipeleft', function() {
    container.scrollLeft += 190; // Adjust scroll amount to account for padding
  });

  hammertime.on('swiperight', function() {
    container.scrollLeft -= 190; // Adjust scroll amount to account for padding
  });

  window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        var mobileMedia = document.querySelector('.mobile-media');
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            mobileMedia.classList.add("steeck");
        } else {
            mobileMedia.classList.remove("steeck");
        }
    }