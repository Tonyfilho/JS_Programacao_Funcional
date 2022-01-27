import { Component, OnInit } from '@angular/core';
import {
  IAllPessoas,
  IPessoas,
} from '../exercicios-reduce-map-filter/exercicios-reduce-map-filter.component';

@Component({
  selector: 'app-reduce-object-entries',
  templateUrl: './reduce-object-entries.component.html',
})
export class ReduceObjectEntriesComponent implements OnInit {
  /**
   * Exercicios de REDUCE e ENTRIES
   */
  objetoENTRIES = Object;
  cidadesReduce!: IPessoas[];
  cidadesReduceComTernario!: IPessoas[];
  cidadeUsandoEntries!: IPessoas[];
  sexoUsandoEntries!: IPessoas[];
  sexoReduce!: IPessoas[];

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
  constructor() {
    /**
     * REDUCE() onde separaremos por cidades o OBJETO, Não sei o por que,
     * tive q criar os Objetos manualmente, para funcionar {Lisboa: [], Setubal:[], QdoAnjo: []},
     * e depois passou a funcionar, mesmo com o Objeto vazio
     */

    this.cidadesReduce = this.pessoas.reduce(
      (acumulador: any, atual, index: number) => {
        if (!acumulador[atual.cidade]) {
          acumulador[atual.cidade] = new Array();
        }
        acumulador[atual.cidade].push(atual);
        return acumulador;
      },
      {}
    );
    /**
     * REDUCE() onde separamos por CIDADES, usando ternario
     */
    this.cidadesReduceComTernario = this.pessoas.reduce(
      (acumulador: any, arrayAtual) => {
        acumulador[arrayAtual.cidade] == undefined
          ? (acumulador[arrayAtual.cidade] = new Array())
          : null;
        acumulador[arrayAtual.cidade].push(arrayAtual);
        return acumulador;
      },
      {}
    );
    /**
     * REDUCE() onde separamos por CIDADES, usando ternario
     */
    this.sexoReduce = this.pessoas.reduce((acumulador: any, atualArray) => {
      acumulador[atualArray.sexo] == null
        ? (acumulador[atualArray.sexo] = new Array())
        : null;
      acumulador[atualArray.sexo].push(atualArray);
      return acumulador;
    }, {});
    
    /**
     * ENTRIES() para cidade de Lisboa
     */
    this.cidadeUsandoEntries = this.objetoENTRIES
      .entries(this.pessoas)
      .map((obj) => obj[1])
      .map((data) => data)
      .filter((data) => data.cidade == 'Lisboa');
    /**
     * ENTRIES() para sexo Masculino
     */
    this.sexoUsandoEntries = this.objetoENTRIES
      .entries(this.pessoas)
      .map((obj) => obj[1])
      .map((obj) => obj)
      .filter((sex) => sex.sexo == 'M');
  }

  ngOnInit(): void {
    console.group('Reduce Agrupando para Cidades, Sexos');
    console.log(this.cidadesReduce);
    console.log(this.cidadesReduceComTernario);
    console.log(this.sexoReduce)
    console.groupEnd();
    console.group('Objeto Entrie filtrando  Cidades, Sexo Masculino');
    console.log(this.cidadeUsandoEntries);
    console.log(this.sexoUsandoEntries);
    console.groupEnd();
  }
}
