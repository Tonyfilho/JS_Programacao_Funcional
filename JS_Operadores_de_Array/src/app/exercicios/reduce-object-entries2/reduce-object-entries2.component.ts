import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-object-entries2',
  templateUrl: './reduce-object-entries2.component.html',
})
export class ReduceObjectEntries2Component implements OnInit {
  objetoENTRIES = Object;
  competenciasCursosEntries!: any[];
  competenciaCursosUsuarioEntries!: any[];
  competenciasCursosReduce!: any[];
  competenciaCursosUsuarioReduce!: any[];
  pessoasECompetencias = [
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
        cursos: ['java', 'Phyton', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
      },
    },
    {
      nome: 'Maria',
      idade: 23,
      cidade: 'Setubal',
      sexo: 'F',
      competencias: {
        cursos: ['C#', 'Js', 'spring'],
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
     * ENTRIES() com Objeto complexo PessoasECompetencias,
     * Removemos os dados os repetidos do ARRAY usando FILTER() e INDEXOF()
     */
    this.competenciasCursosEntries = this.objetoENTRIES
      .entries(this.pessoasECompetencias)
      .flatMap((obj) => obj[1])
      .map((obj) => obj.competencias)
      .map((obs) => obs.cursos)
      .flat().filter((filtro: string, index: number, arrayAtual: string[]) => {
         return arrayAtual.indexOf(filtro) === index;
      });

    this.competenciaCursosUsuarioEntries = this.objetoENTRIES
      .entries(this.pessoasECompetencias)
      .flatMap((obj) => obj[1])
      .filter((dataName) => dataName.nome == 'Joana')
      .map((obj) => obj.competencias)
      .flatMap((cursos) => cursos.cursos);
    /**
     * REDUCE() com Objeto complexo na var competenciasCursosReduce e
     * competenciaCursosUsuarioReduce
     * Removemos os dados os repetidos do ARRAY usando FILTER() e INDEXOF()
     */
   this.competenciasCursosReduce =   this.pessoasECompetencias.reduce((acumulador: any, arrayatual) => {        
        acumulador.push(arrayatual.competencias.cursos);
        return acumulador.flat().filter((filtro: string, index: number, array: string[] )=> {
          return array.indexOf(filtro) === index
           });
      },[]);
   this.competenciaCursosUsuarioReduce = this.pessoasECompetencias.filter(user => user.nome == 'Joana').reduce((acumulador: any, arrayAtual) => {
      acumulador.push(arrayAtual.competencias.cursos);
      return acumulador.flat();
    },[])  
  }

  ngOnInit(): void {
    console.group('Objetos complexo Array de competencia com ENTRIES()');
    console.log(this.competenciasCursosEntries);
    console.log(this.competenciaCursosUsuarioEntries);
    console.groupEnd();
    console.group('Objetos complexo Array de competencia com REDUCE()');
    console.log(this.competenciasCursosReduce);
    console.log(this.competenciaCursosUsuarioReduce);
    
    console.groupEnd();
  }
}
