const { faker } = require('@faker-js/faker');

const NomeAleatorio = faker.name.fullName(); 
const EmailAleatorio = faker.internet.email(); 

console.log ("Nome: " + NomeAleatorio)
console.log ("Email: " + EmailAleatorio)