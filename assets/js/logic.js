// Access light/dark mode toggle element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle element
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    themeSwitcher.textContent = '☀️';
    console.log(themeSwitcher.textContent);
    localStorage.setItem('mode', mode);
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    themeSwitcher.textContent = '🌒';
    console.log(themeSwitcher.textContent);
    localStorage.setItem('mode', mode);
    container.setAttribute('class', 'dark');
  }
});

//Render last saved mode option
function renderLastMode(){
  const initialMode = localStorage.getItem('mode');
  if(initialMode !== null){
    console.log(initialMode);
    container.setAttribute('class',initialMode);
    if(initialMode==='light') {
      themeSwitcher.textContent = '☀️';
      console.log(themeSwitcher.textContent);
    }else{
      themeSwitcher.textContent = '🌒';
      console.log(themeSwitcher.textContent);
    }
  }
};
renderLastMode();
