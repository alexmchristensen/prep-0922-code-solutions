const person = {
  firstname: 'Alex',
  lastname: 'Christensen',
  hobby: 'baking'
};
console.log(person);

const fullName = person.firstname + ' ' + person.lastname;
console.log('The persons name is:', fullName);

person.job = 'Nurse';
console.log('The persons current job is:', person.job);

person.previousJob = 'BSR';
console.log('The persons previous job was:', person.previousJob);

console.log('The complete person object:', person);
