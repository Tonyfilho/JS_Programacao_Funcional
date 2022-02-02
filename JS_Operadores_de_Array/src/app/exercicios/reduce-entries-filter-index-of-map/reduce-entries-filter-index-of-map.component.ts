import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-entries-filter-index-of-map',
  templateUrl: './reduce-entries-filter-index-of-map.component.html',
})
export class ReduceEntriesFilterIndexOfMapComponent implements OnInit {
  objENTRIES = Object;
  cursosReduceComDadosRepedidos!: string[];
  cursosReduceSemDadosRepetidos!: string[];
  viagensPassagensMaritimas!: {};
  viagensPassagensAereas!: {};
  viagensReservas!: string[];
  hobbys!: string[];

  pessoasECompetencias = [
    {
      nome: 'Ayrton',
      idade: 27,
      cidade: 'Setubal',
      sexo: 'M',
      competencias: {
        cursos: ['java', 'Js', 'spring'],
        hobbys: ['wineHouses', 'cozinhar', 'voar de RC'],
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'usa X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'vitoria X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X barcelona'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X sergipe'],
            maritimas: ['são paulo X barcelona', 'vitoria X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X lisboa', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X lisboa'],
          },
        },
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
        viagens: {
          reservas: ['brasil', 'portugal', 'espanha'],
          passagens: {
            terrestres: ['vitoria X manaus', 'setubal X porto'],
            maritimas: ['são paulo X barcelona', 'salvador X lisboa'],
          },
        },
      },
    },
  ];

  constructor() {
    /**
     * Usaremos REDUCE para buscar TODOS os cursos do Objeto,
     * e retornar TODOS os dados mesmo repedidos.
     */
    this.cursosReduceComDadosRepedidos = this.pessoasECompetencias.reduce(
      (acumulador: any, arrayAtual) => {
        acumulador.push(arrayAtual.competencias.cursos);
        return acumulador.flat();
      },
      []
    );
    /**
     * Usaremos REDUCE para buscar TODOS os cursos do Objeto,
     * e retornar eliminando os dados repedidos.
     */
    this.cursosReduceSemDadosRepetidos = this.pessoasECompetencias.reduce(
      (acumulador: any, arrayAtual) => {
        acumulador.push(arrayAtual?.competencias?.cursos);
        return acumulador
          .flat()
          .filter((filtro: string, index: number, array: string[]) => {
            return array.indexOf(filtro) === index;
          });
      },
      []
    );
    /**
     * Usaremos REDUCE para buscar Viagens e Reservas dentro do Objeto complexo
     */
    this.viagensPassagensMaritimas = this.pessoasECompetencias.reduce(
      (acumulador: any, arrayAtual) => {
        acumulador.push(arrayAtual.competencias.viagens.passagens.maritimas);
        return acumulador
          .flat()
          .filter((filtro: string, index: number, array: string[]) => {
            return array.indexOf(filtro) === index;
          });
      },
      []
    );
    // pegando as Viagens aereas
    this.viagensPassagensAereas = this.pessoasECompetencias.reduce(
      (acumulador: any, arrayAtual) => {
        acumulador.push(arrayAtual.competencias.viagens.passagens.terrestres);

        return acumulador
          .flat()
          .filter((filtro: string, index: number, array: string[]) => {
            return array.indexOf(filtro) === index;
          });
      },
      []
    );
    /**
     * Usaremos ENTRIED para buscar Viagens e Reservas dentro do Objeto complexo
     */
    this.hobbys = this.objENTRIES
      .entries(this.pessoasECompetencias)
      .flatMap((obj) => obj[1])
      .flatMap((obj) => obj.competencias.hobbys)
      .filter((filtro: string, index: number, array) => {
        return array.indexOf(filtro) === index;
      });
  }

  ngOnInit(): void {
    console.group('Reduce, Sem a remoção dos dados Duplicados');
    console.log(this.cursosReduceComDadosRepedidos);
    console.groupEnd();
    console.group('Reduce, com Filter e IndexOF, removendo dados Duplicados');
    console.log(this.cursosReduceSemDadosRepetidos);
    console.groupEnd();
    console.group(
      'Usaremos REDUCE para buscar Viagens e Reservas dentro do Objeto complexo'
    );
    console.log('Viagens Maritmas', this.viagensPassagensMaritimas);
    console.log('Viagens aereas', this.viagensPassagensAereas);
    console.groupEnd();
    console.group(
      'Usaremos ENTRIES para buscar hobbys dentro do Objeto complexo'
    );
    console.log('Competencias Hobby', this.hobbys);
    console.groupEnd();
  }
}
