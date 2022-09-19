const newObject = object => {
    const clonedObj = object;
    const entries = Object.entries(clonedObj);

    entries.forEach(([key, value]) => {
        var VENDOR = value['vendor']
        var RATINGS = value['ratings']

        value['vendor'] = JSON.parse(VENDOR)
        value['ratings'] = JSON.parse(RATINGS)
    });

    return clonedObj;
};
// console.log(newObject(a));

var b = newObject(a)
b = JSON.stringify(b)
var fs = require('fs');
fs.writeFile("shop.json", b, function (err) {
    if (err) {
        console.log(err);
    }
});