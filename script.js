let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let stars = document.querySelectorAll('#stars > img');
let btn = document.querySelector('#btn');
let spanSign = document.querySelector('#sign');
let isStarted = false;

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
    secondary: 'white',
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
    secondary: 'white',
    fullname: 'Lucknow Super Giants',
    trophies: 0,
    captain: 'Rishabh Pant',
  },
];

let y;

btn.addEventListener('click', function () {
  stars = document.querySelectorAll('#stars > img');
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('hidden');
  }

  if (!isStarted) {
    btn.textContent = 'CHANGE';
    h1.textContent = 'Chennai Super Kings';
    p.innerHTML = 'Captain - Mahendra Singh Dhoni <span>Mahendra Singh Dhoni</span>';
    isStarted = true;
  }
  if (isStarted) {
    let x = Math.floor(Math.random() * teams.length);
    if (y === x) x = Math.floor(Math.random() * teams.length);
    if (x !== y) {
      y = x;
      let win = teams[x];
      h1.textContent = win.fullname;
      p.innerHTML = `Captain - ${win.captain} <span>${win.captain}</span>`;
      btn.style.backgroundColor = win.secondary;
      btn.style.color = win.primary;
      btn.style.border = `2px solid ${win.primary}`;
      let iplTrophies = win.trophies;
      for (let i = iplTrophies; i < stars.length; i++) {
        stars[i].classList.add('hidden');
      }
      switch (win.team) {
        case 'CSK':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/1CSK.jpeg)`;
          break;
        case 'MI':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/2MI.jpeg)`;
          break;
        case 'KKR':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/3KKR.jpeg)`;
          break;
        case 'GT':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/4GT.jpeg)`;
          break;
        case 'RR':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/5RR.jpeg)`;
          break;
        case 'SRH':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/6SRH.jpeg)`;
          break;
        case 'RCB':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/7RCB.jpeg)`;
          break;
        case 'DC':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/8DC.jpeg)`;
          break;
        case 'PBKS':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/9PBKS.jpeg)`;
          break;
        case 'LSG':
          main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(/TeamFlags/10LSG.jpeg)`;
          break;
      }
    }
  }
});
