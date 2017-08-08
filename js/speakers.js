document.addEventListener('DOMContentLoaded', function() {
  var dropdownButtons = document.querySelectorAll('.circle-speak');
  var dropdowns = document.querySelectorAll('.expanded');
  var arrows = document.querySelectorAll('.circle-speak i');
  var links = document.querySelector('.speaker-links');
  var speakerBox = document.querySelectorAll('.speaker-box');
  var speakerMasterContainer = document.querySelector('.speakers');

  var carouselButtons = document.querySelectorAll('.carousel-button');

  // Carousel functionality

  // This array contains all speaker info. Cards are generated dynamically based on this.

  var speakers = [
    {
      first: 'GARRETT',
      last: 'BROAD',
      headlines: ['Author & Professor', 'Fordham University', 'Social Impact/Sustainability'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      first: 'JESSICA',
      last: 'MINHAS',
      headlines: ['Author, Advocate, Entreprenuer', 'I\'ll Go First', 'Human Rights'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      first: 'ABDUSALAM',
      last: 'ABAJEBEL',
      headlines: ['Owner/Operator', 'Oasis Jimma Juice Bar', 'Juicing'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

  ]

  // Starting point for assigning cards.
  var speakerGalleryPosition = 0;

  // This function displays speakers based on speaker array and starting position.
  var displaySpeakers = function(gallery) {

    // Used to reference starting point while assigned speaker cards
    var currentCard = speakerGalleryPosition;
    // Clears master speaker container
    speakerMasterContainer.innerHTML = '';


    for (x = 0; x < 3; x++) {
      var speakerCard = speakers[currentCard];
      var boxID = x+1;
      speakerMasterContainer.insertAdjacentHTML('beforeend', '<div class="speaker-box ' + speakerCard.first.toLowerCase() + '" id="'+ "speaker-box-"+boxID + '"><div class="speaker-description"><h3>' + speakerCard.first + ' ' + speakerCard.last + '</h3><ul><li>' + speakerCard.headlines[0] + '</li><li>' + speakerCard.headlines[1] + '</li><li>' + speakerCard.headlines[2] + '</li></ul><div class="expanded hide"><p>' + speakerCard.description + '</p></div></div><a><div class="circle-speak"><p><i class="down-arrow"></i></p></div></a></div>');

      if (currentCard + 1 === speakers.length) {
        currentCard = 0
      } else {
        currentCard++;
      }

    }

    var dropdownButtons = document.querySelectorAll('.circle-speak');
    var dropdowns = document.querySelectorAll('.expanded');
    var arrows = document.querySelectorAll('.circle-speak i');
    var links = document.querySelector('.speaker-links');

    dropdownButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        var dropCard = button
                      .parentNode
                      .parentNode
                      .childNodes[0]
                      .childNodes[2];
        if (dropCard.classList[1] === 'hide') {
          dropCard.classList.remove('hide');
          dropCard.classList.add('show');
          button.style.bottom = '-115px';
          button.childNodes[0].childNodes[0].classList.add('up-arrow');
          button.childNodes[0].childNodes[0].classList.remove('down-arrow');
        } else {
          dropCard.classList.remove('show');
          dropCard.classList.add('hide');
          button.style.bottom = '-15px';
          button.childNodes[0].childNodes[0].classList.remove('up-arrow');
          button.childNodes[0].childNodes[0].classList.add('down-arrow');
        }
      });
    });
  };

  displaySpeakers();

  carouselButtons.forEach(function(button) {
    button.addEventListener('click', function (e) {
      if (e.target && e.target.matches('div.left-arrow')) {
        speakerGalleryPosition === 0 ?
          speakerGalleryPosition = speakers.length -1 :
          speakerGalleryPosition--;
      } else {
        speakerGalleryPosition === speakers.length - 1 ?
          speakerGalleryPosition = 0 :
          speakerGalleryPosition++;
      }

      displaySpeakers();
    });
  });

});
