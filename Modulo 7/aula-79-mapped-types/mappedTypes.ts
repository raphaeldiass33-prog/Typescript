/**
 * arquivo: mappedTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Mapped Types' em TypeScript
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */

export { };


// ==> Exemplo 01: Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

type UsuarioIpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
}

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
}

// { [P in K]: T }

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; // for in
};

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usuarioMapped: UsuarioMappedType = {
    nome: 'Raphael Dias',
    endereco: 'Rua 1,121'
}

console.log(usuarioMapped);

// ==> Exemplo 02: Outros Tipos Avançados

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigos = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
    autor: 'Boris Cherny',
    numeroPaginas: 3212,
    preco: 19.99,
    titulo: 'Programming Typescript: Making Your Javascript Applications Scale'
}

// livro.autor = "Glaucia Lemos"