function factorialize(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorialize(num-1);

    };   
};
module.exports = factorialize;

//pair pattner Kylie Namugga