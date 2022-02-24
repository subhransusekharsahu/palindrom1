
function palindrom(value){
   
    let array = Array.from(value);
    let reverse = array.reverse().join();
    console.log(reverse)

    
    if(value == reverse){
        console.log('its a palindrom');
    }else{
        console.log('it s not a palindrom')
    }
}

palindrom('yash')

