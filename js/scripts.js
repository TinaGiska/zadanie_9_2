var namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
var namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allnames = namesMale.concat(namesFemale);

if (allnames.indexOf('Aga') === -1) {
	allnames.push('Aga');
} 

console.log(allnames);
