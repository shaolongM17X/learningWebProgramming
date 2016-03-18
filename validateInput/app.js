/*
Regular Expressions
match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

var $firstPasswordInput = document.querySelector('#first');
var $secondPasswordInput = document.querySelector('#second');
var $submit = document.querySelector('#submit');
var $specifications = document.querySelector('#specifications').children;
var password1st;
var password2nd;

submit.onclick = function() {
    password1st = $firstPasswordInput.value;
    password2nd = $secondPasswordInput.value;
    var testFucs = [lengthIsNotProper, notContainingSpecialCharacter, notContainingNumber, notContainingLowerCase, notContainingUpperCase];
    for (var i = 0; i < testFucs.length; i++) {
        if (testFucs[i](password1st)) {
            highLight($specifications[i]);
        } else {
            normalize($specifications[i]);
        }
    }
    if (password1st != password2nd) {
    	console.log("passwords must match");
    }
};

function highLight(element) {
    element.style.color = "red";
}

function normalize(element) {
    element.style.color = "black";
}

function notContainingSpecialCharacter(password) {
    return password.match(/[\!\@\#\$\%\^\&\*]/g) === null;
}

function notContainingNumber(password) {
    return password.match(/[0-9]/g) === null;
}

function notContainingLowerCase(password) {
    return password.match(/[a-z]/g) === null;
}

function notContainingUpperCase(password) {
    return password.match(/[A-Z]/) === null;
}

function lengthIsNotProper(password) {
    return !(password.length >= 16 && password.length <= 100);
}
