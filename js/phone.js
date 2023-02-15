//  Price Update Function
function updatePhonePrice(elementId){

    const priceField=document.getElementById(elementId);
    const newPhonePrice=newNumber*1219;
          priceField.innerText=newPhonePrice;
          return newPhonePrice;

}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber= updateNumber(true,'phone-number-field');
    updatePhonePrice('phone-price');
    calculation();
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber= updateNumber(false,'phone-number-field');
    updatePhonePrice('phone-price');
    calculation();
})




// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//     const newPhoneNumber= updatePhoneNumber(true);
//     updatePhonePrice(newPhoneNumber);
// })

// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     const newPhoneNumber= updatePhoneNumber(false);
//     updatePhonePrice(newPhoneNumber);
// })