//Validate input text is number
isNumberKey = function(e){
    console.log(e);
    var regex = /^[+-]?\d*\.?\d{0,2}$/;
    if(regex.test(e)){
       return true;
    }else{
       return false;
    }
}
