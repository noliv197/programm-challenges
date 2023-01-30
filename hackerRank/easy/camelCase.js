function camelcase(s) {
    var cut = s.replace(/[A-Z]/g,"");
    var number = (s.length - cut.length) + 1;
    return number;

}

camelcase('saveChangesInTheEditor')