//Validate input text is only letters
isName = function(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    patron = /[a-zA-ZáéíóúñÁÉÍÓÚÑ\s-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
};
