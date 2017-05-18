document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.circle-speak');
  const dropdowns = document.querySelectorAll('.expanded');
  const arrows = document.querySelectorAll('.circle-speak i');
  const links = document.querySelector('.speaker-links');
  const speakers = document.querySelectorAll('.speaker-box')


    for (let i = 0; i < dropdownButtons.length; i++) {
      click = 0;
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
})
