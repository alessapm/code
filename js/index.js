window.onload = () => {
  const dropdownButton = document.querySelector('.circle-speak');
  const dropdown = document.querySelector('.expanded');
  const arrow = document.querySelector('.circle-speak i');
  const links = document.querySelector('.speaker-links');
  click = 0;

  const handleClick = dropdownButton.addEventListener("click",() => {
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
