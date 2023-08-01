// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Déclaration de la fonction fléchée => sans paramètre
const functionInAfunction = () =>  {
  // Déclaration de la focntion 
  function greeting() {
      console.log("I use function!"); // expected output "I use function!"
  }; 
  greeting(); // call the function 
}; 
functionInAfunction(); // call the function 

// Déclaration de la fonction fléchée => sans paramètre
const useAparametersIntoTheFunction = () => {
  function calculateTheArea(heigth, width) {
      console.log(heigth * width); // display the result of parameters 
  }; 
  calculateTheArea(10, 6); // call the function and display the result
}; 
useAparametersIntoTheFunction(); // call the function 