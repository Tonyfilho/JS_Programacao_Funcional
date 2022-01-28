import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-object-entries2',
  templateUrl: './reduce-object-entries2.component.html',
})
export class ReduceObjectEntries2Component implements OnInit {
  objetoENTRIES = Object;
  pessoasECompetencias: any[] = [
    {
      nome: 'Ayrton',
      idade: 27,
      cidade: 'Setubal',
      sexo: 'M',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'João',
      idade: 14,
      cidade: 'Lisboa',
      sexo: 'M',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Maria',
      idade: 23,
      cidade: 'Setubal',
      sexo: 'F',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Joana',
      idade: 21,
      cidade: 'Lisboa',
      sexo: 'F',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Lucas',
      idade: 32,
      cidade: 'Lisboa',
      sexo: 'M',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Mateus',
      idade: 15,
      cidade: 'QdoAnjo',
      sexo: 'M',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Isa',
      idade: 23,
      cidade: 'Setubal',
      sexo: 'F',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Luiza',
      idade: 17,
      cidade: 'QdoAnjo',
      sexo: 'F',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
  ];
  constructor() {
    /**
     * ENTRIES() com Objeto complexo PessoasECompetencias
     */
    this.objetoENTRIES
      .entries(this.pessoasECompetencias)
      .flatMap((obj) => obj[1]);
  }

  ngOnInit(): void {}
}
