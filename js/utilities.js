

//First Aproch

// // Case Number Update function
// function updateCaseNumber(isIncrease){
//     const caseNumberField= document.getElementById('case-number-field');
//     const caseNumberFieldString=caseNumberField.value;
//     let previousCaseNumber=parseInt(caseNumberFieldString);

//     if(isIncrease){
//         newCaseNumber=previousCaseNumber+1;
        
//     }
//     else{
//         newCaseNumber=previousCaseNumber-1;
       
//     }
//     caseNumberField.value=newCaseNumber;
//     return newCaseNumber;
// }

// // Case Price Update Function
// function updateCasePrice(newCaseNumber){

//     const casePriceField=document.getElementById('case-price');
//     const newCasePrice=newCaseNumber*59;
//     casePriceField.innerText=newCasePrice;

// }

// // Phone Number Update function
// function updatePhoneNumber(isIncrease){
//     const phoneNumberField= document.getElementById('phone-number-field');
//     const phoneNumberFieldString=phoneNumberField.value;
//     let previousphoneNumber=parseInt(phoneNumberFieldString);

//     if(isIncrease){
//         newphoneNumber=previousphoneNumber+1;
        
//     }
//     else{
//         newphoneNumber=previousphoneNumber-1;
       
//     }
//     phoneNumberField.value=newphoneNumber;
//     return newphoneNumber;
// }

// // Phone Price Update Function
// function updatePhonePrice(newphoneNumber){

//     const phonePriceField=document.getElementById('phone-price');

//     const newphonePrice=newphoneNumber*1219;

//     phonePriceField.innerText=newphonePrice;

// }





// Second Aproch

function getTextElementById(elementId){
    const casePriceField=document.getElementById(elementId);
    const casePriceFieldString=casePriceField.innerText;
    const casePrice=parseFloat(casePriceFieldString);
    return casePrice;
}

function setTextElementById(elementId,value){
    const textField=document.getElementById(elementId);
    textField.innerText=value;
}

function updateNumber(isIncrease,elementId){
    const numberField= document.getElementById(elementId);
    const numberFieldString=numberField.value;
    let previousNumber=parseInt(numberFieldString);

    if(isIncrease){
        newNumber=previousNumber+1;
        
    }
    else{
        newNumber=previousNumber-1;
       
    }
       numberField.value=newNumber;
    return newNumber;
}


function calculation(){
    const casePrice=getTextElementById('case-price');
    const phonePrice=getTextElementById('phone-price');

    const subTotalPrice=casePrice+phonePrice;
   setTextElementById('subtotal',subTotalPrice);

   const taxString=(subTotalPrice*0.1).toFixed(2);
   const tax=parseFloat(taxString);
   setTextElementById('tax',tax);

   const total=subTotalPrice + tax;
   setTextElementById('total',total);


}

