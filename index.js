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


function switchColor(e) {
  
  
  const cologBg = colors[`${randomIntegerFromInterval()}`];
  bodyRef.style.backgroundColor = `${cologBg}`;
 
  startRef.setAttribute("disabled", "true");


 // startRef.classList.add("pointer-events");

 
  ;}


startRef.addEventListener('click', switchColor);
// startRef.addEventListener('click', event => {
//   event.target = true;

//     const randomNumber = randomIntegerFromInterval();
// console.log();
// console.log(valueAtIndex1);
// console.log(colorBg);
// });

// startRef.addEventListener('click',  );




