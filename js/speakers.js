document.addEventListener('DOMContentLoaded', function() {
  var dropdownButtons = document.querySelectorAll('.circle-speak');
  var dropdowns = document.querySelectorAll('.expanded');
  var arrows = document.querySelectorAll('.circle-speak i');
  var links = document.querySelector('.speaker-links');
  var speakerBox = document.querySelectorAll('.speaker-box');
  var speakerMasterContainer = document.querySelector('.speakers');

  var carouselButtons = document.querySelectorAll('.carousel-button');

  // More info functionality
  for (var y = 0; y < dropdownButtons.length; y++) {
    var click = 0;
    dropdownButtons[y].addEventListener('click', () => {
      click += 1;
      if((click%2) !== 0) {
        dropdowns[y].classList.add('show');
        dropdowns[y].classList.remove('hide');
        links.style.marginTop= '100px';
        arrows[y].classList.add('up-arrow');
        arrows[y].classList.remove('down-arrow');
      } else {
          click = 0;
          dropdowns[y].classList.remove('show');
          dropdowns[y].classList.add('hide');
          links.style.marginTop = '0';
          arrows[y].classList.remove('up-arrow')
          arrows[y].classList.add('down-arrow')
      };
    });
  }

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
      console.log('Creating ' + speakerCard.first);
      var boxID = x+1;
      speakerMasterContainer.insertAdjacentHTML('beforeend', '<div class="speaker-box ' + speakerCard.first.toLowerCase() + '" id="'+ "speaker-box-"+boxID + '"><div class="speaker-description"><h3>' + speakerCard.first + ' ' + speakerCard.last + '</h3><ul><li>' + speakerCard.headlines[0] + '</li><li>' + speakerCard.headlines[1] + '</li><li>' + speakerCard.headlines[2] + '</li></ul><div class="expanded hide"><p>' + speakerCard.description + '</p></div></div><a><div class="circle-speak"><p><i class="down-arrow"></i></p></div></a></div>');

      if (currentCard + 1 === speakers.length) {
        currentCard = 0
      } else {
        currentCard++;
      }
    }
  }

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
          speakerGalleryPosition ++;
      }

      displaySpeakers();
    })
  })

})
