var container = document.querySelector('.media');
  var hammertime = new Hammer(container);

  hammertime.on('swipeleft', function() {
    container.scrollLeft += 190; // Adjust scroll amount to account for padding
  });

  hammertime.on('swiperight', function() {
    container.scrollLeft -= 190; // Adjust scroll amount to account for padding
  });

  