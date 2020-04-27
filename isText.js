//Validate input text is only letters and some special characters.
isText = function(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    patron = /[a-zA-Z0-9_.,:;'@áéíóúñÁÉÍÓÚÑ\s-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
};
