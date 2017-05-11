window.onload = () => {
  const dropdownButtons = document.querySelectorAll('.circle-speak');
  const dropdowns = document.querySelectorAll('.expanded');
  const arrows = document.querySelectorAll('.circle-speak i');
  const links = document.querySelector('.speaker-links');
  const speakers = document.querySelector('.speaker-box')
  click = 0;


    for (var i = 0; i < speakers.length; i++) {
      dropdownButtons[i].addEventListener('click', () => {
        click += 1;
        if((click%2) !== 0) {
          dropdowns[i].classList.add('show');
          dropdowns[i].classList.remove('hide');
          links.style.marginTop= '100px';
          arrows[i].classList.add('up-arrow');
          arrows[i].classList.remove('down-arrow');
        } else {
            dropdowns[i].classList.remove('show');
            dropdowns[i].classList.add('hide');
            links.style.marginTop = '0';
            arrows[i].classList.remove('up-arrow')
            arrows[i].classList.add('down-arrow')
        };
      });
    }
  }
