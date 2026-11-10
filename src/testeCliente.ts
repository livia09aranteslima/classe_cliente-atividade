import {Cliente} from "./models/Cliente.js";
const cliente1 = new Cliente(1, "André Solicito", "068.753.540-98", "41.068.896-4", 1980);
const cliente2 = new Cliente(2, "Janete de Oliveira", "501.764.310-98", "20.360.374-6", 1970);
const cliente3 = new Cliente(3, "José de Almeida", "862.373.890-08", "42.172.423-7", 1965);

console.log("CLIENTE 1");
console.log("Nome: ", cliente1.getNome());
console.log("CPF: ", cliente1.getCPF());
console.log("RG: ", cliente1.getrg());
console.log("Idade: ", cliente1.getIdade());

console.log("CLIENTE 2");
console.log("Nome: ", cliente2.getNome());
console.log("CPF: ", cliente2.getCPF());
console.log("RG: ", cliente2.getrg());
console.log("Idade: ", cliente2.getIdade());

console.log("CLIENTE 3");
console.log("Nome: ", cliente3.getNome());
console.log("CPF: ", cliente3.getCPF());
console.log("RG: ", cliente3.getrg());
console.log("Idade: ", cliente3.getIdade());