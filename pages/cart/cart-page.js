// ! the increase and decrease functions work visually but they will not work technically as I have not given any id to any of the products. the shopping cart is not maintainable in the long run. It looks fine because we can increment and decrement. because this is a frontend project, I left it at that only.


const minusBtns = document.querySelectorAll('.minus')
const plusBtns = document.querySelectorAll('.plus')
const inputIncreaseDecreaseInputs = document.querySelectorAll('.increase-decrease-input-box')

console.log(minusBtns);
console.log(plusBtns);
// ! this controls how many items a user can select at max
const maxItems = 10;



// ! make input box value = 0 for all inputboxes where value attribute is not an integer

inputIncreaseDecreaseInputs.forEach((inputIncreaseDecreaseInput)=>{

    

    let currentValue = parseInt(inputIncreaseDecreaseInput.value) || 1;


    inputIncreaseDecreaseInput.value = currentValue;

    

    

})

let total = 0;

plusBtns.forEach((plusBtn)=>{
    plusBtn.addEventListener('click',(e)=>{
       
        
        

       
        // ! if the current value of the increase decrease input is an empty string then set it to zero
        let currentValue = parseInt(plusBtn.nextElementSibling.value) || 0


        // ! the user can choose a maximum of only 5 items. the counter will stop at 5.
        if(currentValue >= maxItems){
            return;
        }
        plusBtn.nextElementSibling.value = currentValue + 1
       


        
       
       

       
        

        
        


    })

    
})
minusBtns.forEach((minusBtn)=>{
    minusBtn.addEventListener('click',(e)=>{

        // ! maybe parseInt did its magic! I do not have to check for negative values that the minus Sign can cause
       
        // ! if the current value of the increase decrease input is an empty string then set it to one
        let currentValue = parseInt(minusBtn.previousElementSibling.value) || 1
        minusBtn.previousElementSibling.value = currentValue - 1
    })
})

