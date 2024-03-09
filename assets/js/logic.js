// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
console.log(themeSwitcher.textContent);
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    localStorage.setItem('mode', mode);
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    localStorage.setItem('mode', mode);
    container.setAttribute('class', 'dark');
  }
});


//Render last saved mode option
function renderLastMode(){
  const initialMode = localStorage.getItem('mode');
  if(initialMode !== null){
    container.setAttribute('class',initialMode);
  };
};
renderLastMode();

