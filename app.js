let input = document.getElementById('inputbox');
let btn = document.querySelectorAll('button');






let calculation = "";
let arr = Array.from(btn);
arr.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            calculation = eval(calculation);
            input.value = calculation;
        }

        else if(e.target.innerHTML == 'AC'){
            calculation = "";
            input.value = calculation;
        }

        else if(e.target.innerHTML == 'DEL'){
            calculation = calculation.slice(0, calculation.length-1);
            input.value = calculation;
        }
        else{
            calculation += e.target.innerHTML;
            input.value = calculation;
        }
    })

})






















// let string = "";
// let arr = Array.from(btn);
// arr.forEach(data => {
//     data.addEventListener('click', (e) =>{

//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//        else if (e.target.innerHTML == 'AC') {
//         string = "";
//         input.value = string;
//        }
//        else if (e.target.innerHTML == 'DEL') {
//         string = string.substring(0, string.length-1)
//         input.value = string
//        }
//         else{
//             string += e.target.innerHTML;
//         input.value = string;
//         }
//     });
// })

























// arr.forEach( button => {
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;  
//             input.value = string;
//         }

        
//     })
// })









// let arr = Array.from(btn);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }else{
//             string  += e.target.innerHTML;
//             input.value = string;
//         }
    
        
//     })
// });
// buttons.addEventListener('click', (e) => {
//     if (e.target.innerHTML == '='){
//         string = eval(string);
//         input.value = string;
//     }

//     string  += e.target.innerHTML;
//     input.value = string;
// });