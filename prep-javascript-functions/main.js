function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(5, 5);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hours = convertHoursToMinutes(2);
console.log(hours);

function getGreeting(name) {
  return name + ' world!';
}
var name = getGreeting('hello');
console.log(name);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}
var total1 = addAndMultiplyBy5(10, 5);
console.log(total1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var total2 = multiplyAndDivideBy5(35, 10);
console.log(total2);

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}

var total3 = getCircleCircumference(5);
console.log(total3);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

var fullname = getFullName('alex', 'christensen');
console.log(fullname);

function cube(number) {
  return number * number * number;
}

var totalcube = cube(5);
console.log(totalcube);
