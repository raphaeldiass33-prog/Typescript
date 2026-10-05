/**
 * arquivo: extendsInterfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'extends' e 'implements' em TypeScript
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */

export = {};

// ==> Exemplo 01 - Interfaces com extends
interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Akira',
  idade: 4,
  porte: 'Médio',
  raca: 'Vira-lata',
};

console.log(cachorro);

// ==> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro {
    nome: string;
}

interface Gato {
    nome: string;
}

interface Animal extends Cachorro, Gato {
    idade: number;
}

const animal: Animal = {
    nome: 'Frajola',
    idade: 5
};

console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'ts-123',
  nome: 'Raphael Dias',
  salario: '10k',
  linguageProgramacao: 'typescript',
}

console.log(desenvolvedor)

// Exemplo 04 - Uso do pipe

// Exemplo 04 - Uso do pipe

/*interface Funcionario {
  id: number | string;
  nome: string;
  salario: number | string;
}

interface Desenvolvedor extends Funcionario {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'ts-123',
  nome: 'Raphael Dias',
  salario: '10k',
  linguageProgramacao: 'typescript',
}

console.log(desenvolvedor)*/
