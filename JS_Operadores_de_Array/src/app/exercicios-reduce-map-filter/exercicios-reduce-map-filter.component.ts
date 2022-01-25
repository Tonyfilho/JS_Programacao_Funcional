import { Component, OnInit } from '@angular/core';
/**
 * ************************Interfaces********************
 */
interface IPessoas {
  nome: string;
  idade: number;
  cidade: string;
  sexo: string;
};
interface IAllPessoas {
  pessoas: IPessoas[];
};

interface IUsuariosResposta {
  nome: string;
  resposta: [
    {
      questao_id: string;
      acertou: boolean;
    }
  ]
}
interface IAllUsuariosResposta {
  usuarios: IUsuariosResposta[];
}
@Component({
  selector: 'app-exercicios-reduce-map-filter',
  templateUrl: './exercicios-reduce-map-filter.component.html',
})
export class ExerciciosReduceMapFilterComponent implements OnInit {
  /**
   * Exercicios FILTER(), MAP(); REDUCE() e SPREAD [...]
   */
  usuariosResposta = [
    {
      nome: 'tony',
      resposta: [
        { questao_id: '001,', acertou: false },
        { questao_id: '002,', acertou: true },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: true },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'debora',
      resposta: [
        { questao_id: '001,', acertou: true },
        { questao_id: '002,', acertou: false },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: false },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'juan',
      resposta: [
        { questao_id: '001,', acertou: false },
        { questao_id: '002,', acertou: true },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: true },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'orelha',
      resposta: [
        { questao_id: '001,', acertou: true },
        { questao_id: '002,', acertou: false },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: false },
        { questao_id: '005,', acertou: true },
      ],
    },
  ];
  pessoas: IPessoas[] = [
    {
      nome: 'Ayrton',
      idade: 27,
      cidade: 'Setubal',
      sexo: 'M',
    },
    {
      nome: 'João',
      idade: 14,
      cidade: 'Lisboa',
      sexo: 'M',
    },
    {
      nome: 'Maria',
      idade: 23,
      cidade: 'Setubal',
      sexo: 'F',
    },
    {
      nome: 'Joana',
      idade: 21,
      cidade: 'Lisboa',
      sexo: 'F',
    },
    {
      nome: 'Lucas',
      idade: 32,
      cidade: 'Lisboa',
      sexo: 'M',
    },
    {
      nome: 'Mateus',
      idade: 15,
      cidade: 'QdoAnjo',
      sexo: 'M',
    },
    {
      nome: 'Isa',
      idade: 23,
      cidade: 'Setubal',
      sexo: 'F',
    },
    {
      nome: 'Luiza',
      idade: 17,
      cidade: 'QdoAnjo',
      sexo: 'F',
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
