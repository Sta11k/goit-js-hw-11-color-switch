const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
   min = 0;
   max = 5;
  return Math.floor(Math.random() * (max - min + 1) + min);
 
};


const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startRef.addEventListener('click', startSwitchColor);
stopRef.addEventListener('click', stopSwitchColor);



function startSwitchColor(e) {
  // startRef.setAttribute("disabled", "true");
  
  startRef.classList.add("pointer-events");
  stopRef.classList.remove("pointer-events");
  
    function setColor() {
    const cologBg = colors[`${randomIntegerFromInterval()}`];
    bodyRef.style.backgroundColor = `${cologBg}`;
  
  };
  
  return timerId = setInterval(() => {
    setColor();
  }, 1000);
;}

function stopSwitchColor(e) {
  startRef.classList.remove("pointer-events");
  stopRef.classList.add("pointer-events");
  clearTimeout(timerId);
  //  stopRef.setAttribute("disabled", "true");
  // startRef.setAttribute("disabled", "false");
};


