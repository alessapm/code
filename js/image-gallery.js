document.addEventListener('DOMContentLoaded', function() {

  var gallerySlide = ["color1", "color2", "color3", "color4", "color5", "color6", "color7"]

  if (document.documentElement.clientWidth > 800 && document.documentElement.clientHeight > 600) {
    for (let i=0; i< gallerySlide.length; i++) {
      let image = document.getElementById(gallerySlide[i]);

      image.addEventListener("mouseover", function() {
        let newNum = i + 1;
        image.src = './images/section7_images/gallery' + newNum + '.jpg';
      })

      image.addEventListener("mouseout", function() {
        let newNum = i + 1;
        image.src = './images/section7_images/gallery' + newNum + '-blue.jpg';
      })
    }

  } else {
    for (let i=0; i< gallerySlide.length; i++) {
      let image = document.getElementById(gallerySlide[i]);
      let newNum = i + 1;
      image.setAttribute('src', './images/section7_images/gallery' + newNum + '.jpg');

    }
  }

});
