// return correct dateformat
getJsDateFormat = function (typeof) {
    var formats = {
        "d-m-Y": "dd-mm-yyyy",
        "m-d-Y": "mm-dd-yyyy",
        "Y-m-d": "yyyy-mm-dd",
        "d/m/Y": "dd/mm/yyyy",
        "m/d/Y": "mm/dd/yyyy",
        "Y/m/d": "yyyy/mm/dd",
        "d.m.Y": "dd.mm.yyyy",
        "m.d.Y": "mm.dd.yyyy",
        "Y.m.d": "yyyy.mm.dd",
        "dd-mm-yy": "dd-mm-yyyy",
        "mm-dd-yy": "mm-dd-yyyy",
        "yy-mm-dd": "yyyy-mm-dd",
        "dd/mm/yy": "dd/mm/yyyy",
        "mm/dd/yy": "mm/dd/yyyy",
        "yy/mm/dd": "yyyy/mm/dd",
        "dd.mm.yy": "dd.mm.yyyy",
        "mm.dd.yy": "mm.dd.yyyy",
        "yy.mm.dd": "yyyy.mm.dd"
    };
    return formats[typeof] || "yyyy-mm-dd";
};
