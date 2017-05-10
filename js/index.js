window.onload = () => {
  const dropdownButtons = document.querySelectorAll('.circle-speak');
  const arrow = document.querySelector('.circle-speak i');
  const links = document.querySelector('.speaker-links');

  for (let i = 0; i < dropdownButtons.length; i++) {
    let click = 0;
    if (document.addEventListener) {
      dropdownButtons[i].addEventListener("click", function() {
        const dropdown = this.querySelector('.expanded');
        click += 1;
        if((click%2) !== 0) {
          dropdown.classList.add('show');
          dropdown.classList.remove('hide');
          links.style.marginTop= '100px';
          arrow.classList.add('up-arrow');
          arrow.classList.remove('down-arrow');
        } else {
          dropdown.classList.remove('show');
          dropdown.classList.add('hide');
          links.style.marginTop = '0';
          arrow.classList.remove('up-arrow')
          arrow.classList.add('down-arrow')
        };
      });
    }
  };
};
