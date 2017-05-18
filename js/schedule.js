document.addEventListener('DOMContentLoaded', () => {

  console.log('script loaded');

  //                    variables
  let dropDownSched = document.querySelectorAll('.circle-sched i');
  let day1 = document.getElementById('day1');
  let day2 = document.getElementById('day2');
  let day3 = document.getElementById('day3');
  let day1events = document.querySelectorAll('.day1');
  let day2events = document.querySelectorAll('.day2');
  let day3events = document.querySelectorAll('.day3');

  //                   click events

// does the drop down for event details
  for (let i = 0; i< dropDownSched.length; i++){
    let clickSched = 0;
    let eventDiv = dropDownSched[i].parentNode.parentNode.parentNode.parentNode
    let detailsP = eventDiv.childNodes[3].childNodes[5];
    dropDownSched[i].addEventListener('click', () => {
      if (clickSched%2 === 0){
        dropDownSched[i].classList.remove('down-arrow');
        dropDownSched[i].classList.add('up-arrow');
        clickSched++;

        detailsP.classList.remove('inactive');
        detailsP.classList.add('active');

        eventDiv.setAttribute("style", "height:200px;background-color:#00ACE9;color:#FFFFFF;border:none");

      } else {
        dropDownSched[i].classList.remove('up-arrow');
        dropDownSched[i].classList.add('down-arrow');
        clickSched++;

        detailsP.classList.remove('active');
        detailsP.classList.add('inactive');

        eventDiv.setAttribute("style", "height:120px;background-color:#FFFFFF; color:#5C5C5C;border:2px solid #25D432");
      }

    }) //close dropDownSched click event

  }





// switches between days
  day1.addEventListener('click', ()=> {
    day1.classList.add('tab-active');
    day2.classList.remove('tab-active');
    day3.classList.remove('tab-active');

    for (let i =0; i < day1events.length; i++){
      day1events[i].classList.remove("hide-day");
    }

    for (let j =0; j < day2events.length; j++){
      day2events[j].classList.add("hide-day");
    }

    for (let k =0; k < day3events.length; k++){
      day3events[k].classList.add("hide-day");
    }


  });

  day2.addEventListener('click', ()=> {
    day2.classList.add('tab-active');
    day1.classList.remove('tab-active');
    day3.classList.remove('tab-active');

    for (let i =0; i < day1events.length; i++){
      day1events[i].classList.add("hide-day");
    }

    for (let j =0; j < day2events.length; j++){
      day2events[j].classList.remove("hide-day");
    }

    for (let k =0; k < day3events.length; k++){
      day3events[k].classList.add("hide-day");
    }
  })

 day3.addEventListener('click', ()=> {
    day3.classList.add('tab-active');
    day2.classList.remove('tab-active');
    day1.classList.remove('tab-active');

    for (let i =0; i < day1events.length; i++){
      day1events[i].classList.add("hide-day");
    }

    for (let j =0; j < day2events.length; j++){
      day2events[j].classList.add("hide-day");
    }

    for (let k =0; k < day3events.length; k++){
      day3events[k].classList.remove("hide-day");
    }
  })







});
