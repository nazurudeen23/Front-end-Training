const inputValue = document.getElementsByClassName('input').value;
const insert = document.getElementById('sub');


insert.onclick = function()
{
   let values = inputValue;

   if(values){
       localStorage.setItem(values)
       location.reload()
   }
}

const msgForm = document.querySelector("#form"); 
let inputs = msgForm.querySelectorAll(".input"); 
inputs = Array.prototype.slice.call(inputs); 
let textarea = msgForm.querySelector("textarea"); 
const x = () => { 
    msgForm.querySelector('#sub').addEventListener('click', clearForm); 
} 
const clearForm = (e) => { 
    e.preventDefault(); 
    inputs.forEach((element) => { 
        element.value = ""; 
    }) 
    textarea.value = "" 
} 
x();