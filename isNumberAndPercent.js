//Validate input text is number & between 1-100
isNumberAndPercent = function(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    patron = /^[0-9.,\n]+$/;
    te = String.fromCharCode(tecla);
    if (te<0 & te>100) {
        return false;
    }
    return true;
};
