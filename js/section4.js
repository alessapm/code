document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.circle-speak');
  const dropdowns = document.querySelectorAll('.expanded');
  const arrows = document.querySelectorAll('.circle-speak i');
  const links = document.querySelector('.speaker-links');
  let speakers = document.querySelectorAll('.speaker-box')

  const carouselButtons = document.querySelectorAll('.carousel-button')

  // More info functionality
  for (let i = 0; i < dropdownButtons.length; i++) {
    let click = 0;
    dropdownButtons[i].addEventListener('click', () => {
      click += 1;
      if((click%2) !== 0) {
        dropdowns[i].classList.add('show');
        dropdowns[i].classList.remove('hide');
        links.style.marginTop= '100px';
        arrows[i].classList.add('up-arrow');
        arrows[i].classList.remove('down-arrow');
      } else {
          click = 0;
          dropdowns[i].classList.remove('show');
          dropdowns[i].classList.add('hide');
          links.style.marginTop = '0';
          arrows[i].classList.remove('up-arrow')
          arrows[i].classList.add('down-arrow')
      };
    });
  }

  // Carousel functionality

  let currentSpeakers = [];

  for (let x = 0; x < speakers.length; x++) {
    currentSpeakers.push(speakers[x])
    if (x >= 3) {
      currentSpeakers[x].classList.add('hide')
    }
  }

  for (let i = 0; i < carouselButtons.length; i++) {
    carouselButtons[i].addEventListener('click', () => {
      for (let j = 0; j < currentSpeakers.length; j++) {
        if (j < 3) {
          currentSpeakers[j].classList.remove('hide')
        } else {
          currentSpeakers[j].classList.add('hide')
        }
      }
      let droppedSpeaker = currentSpeakers.shift()
      currentSpeakers.push(droppedSpeaker);
    })
  }


})
