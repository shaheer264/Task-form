function myFunction() {
    var name = document.getElementById("name-input").value;
    var age = document.getElementById("age-input").value;
    var weight = document.getElementById("weight-input").value;
    var output = "";
    output = logic(name, age, weight);
    displayResult(output);
}
// Operation 
function logic(name, age, weight) {
    if (age >= 5 && age <=7) {
        if (weight >= 15 && weight <= 20) {
            output = 'Hello ' + name + ' !!! Your weight is perfect.';
        }
        else if (weight > 20) {
            output = 'Hello ' + name + ' !!! Your weight is greater than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
        else {
            output = 'Hello ' + name + ' !!! Your weight is less than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
    }
    else if (age >= 8 && age <=10) {
        if (weight >= 21 && weight <= 25) {
            output = 'Hello ' + name + ' !!! Your weight is perfect.';
        }
        else if (weight > 25) {
            output = 'Hello ' + name + ' !!! Your weight is greater than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
        else {
            output = 'Hello ' + name + ' !!! Your weight is less than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
    }
    else if (age >= 11 && age <=15) {
        if (weight >= 26 && weight <= 30) {
            output = 'Hello ' + name + ' !!! Your weight is perfect.';
        }
        else if (weight > 30) {
            output = 'Hello ' + name + ' !!! Your weight is greater than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
        else {
            output = 'Hello ' + name + ' !!! Your weight is less than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
    }
    else if (age >= 16 && age <=20) {
        if (weight >= 31 && weight <= 40) {
            output = 'Hello ' + name + ' !!! Your weight is perfect.';
        }
        else if (weight > 40) {
            output = 'Hello ' + name + ' !!! Your weight is greater than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
        else {
            output = 'Hello ' + name + ' !!! Your weight is less than the recommended value of ' + weight + 'KG at an age of ' + age + '.';
        }
    }
    else {
        output = 'Age entered is not in the specified range.'
    }
    return output;
}
//Display Output
function displayResult(message) {
    document.getElementById('result').innerHTML = message;
}