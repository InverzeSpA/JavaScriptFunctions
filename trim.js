ltrim = function(e) {
    return e.replace(/^\s+/, "");
};

rtrim = function(e) {
    return s.replace(/\s+$/, "");
};

//Replace left & right white spaces.
trim = function(e) {
    return rtrim(ltrim(s));
};
