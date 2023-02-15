
function updateCasePrice(elementId){

    const priceField=document.getElementById(elementId);
    const newCasePrice=newNumber*59;
          priceField.innerText=newCasePrice;
          return newCasePrice;

}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber= updateNumber(true,'case-number-field');
    updateCasePrice('case-price');
    calculation();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber= updateNumber(false,'case-number-field');
    updateCasePrice('case-price');
    calculation();
})




// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const newCaseNumber= updateCaseNumber(true);
//     updateCasePrice(newCaseNumber);
// })

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const newCaseNumber= updateCaseNumber(false);
//     updateCasePrice(newCaseNumber);
// })