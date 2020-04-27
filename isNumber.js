//Validate input text is number with ',' or '.'
isNumber = function(e, separator) {
    tecla = (document.all) ? e.keyCode : e.which;
    if(separator==","){patron = /^[0-9,\n]+$/;}else{patron = /^[0-9.\n]+$/;}
    te = String.fromCharCode(tecla);
    return patron.test(te);
};
