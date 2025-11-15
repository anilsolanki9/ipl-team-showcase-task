let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let btn = document.querySelector('#btn');
let isStarted = false;

/* ------------------------------- Teams array ------------------------------ */
let teams = [
  {
    team: 'CSK',
    primary: 'yellow',
    secondary: 'blue',
    fullname: 'Chennai Super Kings',
    trophies: 5,
    captain: 'Mahendra Singh Dhoni',
  },
  {
    team: 'MI',
    primary: 'blue',
    secondary: 'gold',
    fullname: 'Mumbai Indians',
    trophies: 5,
    captain: 'Hardik Pandya',
  },
  {
    team: 'KKR',
    primary: 'purple',
    secondary: 'gold',
    fullname: 'Kolkata Knight Riders',
    trophies: 3,
    captain: 'Ajinkya Rahane',
  },
  {
    team: 'GT',
    primary: 'darkblue',
    secondary: 'silver',
    fullname: 'Gujarat Titans',
    trophies: 1,
    captain: 'Shubman Gill',
  },
  {
    team: 'RR',
    primary: 'pink',
    secondary: 'black',
    fullname: 'Rajasthan Royals',
    trophies: 1,
    captain: 'Sanju Samson',
  },
  {
    team: 'SRH',
    primary: 'orange',
    secondary: 'black',
    fullname: 'Sunrisers Hyderabad',
    trophies: 1,
    captain: 'Pat Cummins',
  },
  {
    team: 'RCB',
    primary: 'red',
    secondary: 'black',
    fullname: 'Royal Challengers Bengaluru',
    trophies: 1,
    captain: 'Rajat Patidar',
  },
  {
    team: 'DC',
    primary: 'blue',
    secondary: 'silver',
    fullname: 'Delhi Capitals',
    trophies: 0,
    captain: 'Axar Patel',
  },
  {
    team: 'PBKS',
    primary: 'red',
    secondary: 'silver',
    fullname: 'Punjab Kings',
    trophies: 0,
    captain: 'Shreyas Iyer',
  },
  {
    team: 'LSG',
    primary: 'blue',
    secondary: 'silver',
    fullname: 'Lucknow Super Giants',
    trophies: 0,
    captain: 'Rishabh Pant',
  },
];

/* -------------------- performance, image delay solution ------------------- */
const preloadImages = () => {
  for (let i = 1; i <= 10; i++) {
    const img = new Image();
    img.src = `/TeamFlags/${i}.jpg`; // this loads image into browser cache
  }
};
preloadImages();
preloadImages();
preloadImages();
preloadImages();

let y; // variable to store the team index info, global to retain its value even for new click, and then check agains new value

btn.addEventListener('click', function () {
  //this algo make sure for every new click all 5 stars are visible, then later some are hide (as per wins)
  let stars = document.querySelectorAll('#stars > img');
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('hidden');
  }

  if (!isStarted) isStarted = true;

  if (isStarted) {
    let x;
    //loop to make sure every time user click, it get an unique value
    do {
      x = Math.floor(Math.random() * teams.length);
    } while (x === y);

    y = x; // assign x to y for retaining value for next click

    let win = teams[x]; // teams me se x index ke element ko win me store kr diya

    h1.textContent = win.fullname;
    p.innerHTML = `Captain - ${win.captain} <span id="sign">${win.captain}</span>`;
    let spanSign = document.querySelector('#sign');
    btn.style.backgroundColor = win.secondary;
    btn.style.color = win.primary;
    btn.style.border = `2px solid ${win.primary}`;
    main.style.backgroundColor = win.primary;
    btn.textContent = 'CHANGE';
    spanSign.style.color = win.primary;

    let iplTrophies = win.trophies;
    for (let i = iplTrophies; i < stars.length; i++) {
      stars[i].classList.add('hidden');
    }

    main.style.background = `linear-gradient(rgba(0, 0, 0, 0.663), rgba(0, 0, 0, 0.454)), url(./TeamFlags/${
      y + 1
    }.jpg)`;
    main.style.backgroundPosition = 'center';
    main.style.backgroundSize = 'cover';
  }
});
