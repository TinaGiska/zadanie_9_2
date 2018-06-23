var namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
var namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allnames = namesMale.concat(namesFemale);

var name = prompt('Enter some name');


if (allnames.indexOf(name) === -1) {
	allnames.push(name);
} else {
	alert('your name is already there,' + name);
}



console.log(name);
console.log(allnames);


