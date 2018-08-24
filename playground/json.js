/*
    var obj = {
        name : 'jainish'
    };
    var stringobj = JSON.stringify(obj);
    console.log(typeof stringobj);
    console.log(stringobj);
*/

var personString = '{ "name": "Jainish", "status": "online" }';
var toObject = JSON.parse(personString);
console.log(typeof toObject);
console.log(toObject);