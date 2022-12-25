
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()* 10000);
    return random;
}

document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pinFound = getPin();
    
    const displayFieldPin = document.getElementById('display-pin');
    displayFieldPin.value = pinFound;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const numbers = event.target.innerText;

    const typedNumber = document.getElementById('typed-number');
    const previousTypedNumber = typedNumber.value;
    
    if(isNaN(numbers)){
        if(numbers === 'C'){
            typedNumber.value = '';
        }
        else if(numbers === '<'){
            const disits = previousTypedNumber.split('')
            disits.pop();
            const remainingDisits = disits.join('');
            typedNumber.value = remainingDisits;
        }
    }
    else{
    const newTypedNumber = previousTypedNumber + numbers;
    typedNumber.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayFieldPin = document.getElementById('display-pin')
    const currentPin = displayFieldPin.value;

    const newTypedNumberField = document.getElementById('typed-number');
    const newTypedNumber = newTypedNumberField.value;


    const pinSuccessMessage = document.getElementById('pin-success')
    const pinFailMassage = document.getElementById('pin-fail');

    if(newTypedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailMassage.style.display = 'none'
    }
    else{
        pinFailMassage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})