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
  cidade!: object;
  cidadesReduceComTernario!: object;
  cidadeUsandoEntries!: IPessoas[];
  sexo!: object;

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

    this.cidade = this.pessoas.reduce(
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
     * ENTRIES()
     */
   this.cidadeUsandoEntries = this.objetoENTRIES.entries(this.pessoas).map(obj => obj[1]).map(data => data).filter(data => data.cidade == 'Lisboa');
   

  }

  ngOnInit(): void {
    console.group('Reduce para Cidades');
    console.log(this.cidade);
    console.log(this.cidadesReduceComTernario);
    console.groupEnd();
    console.group('Objeto Entrie filtrando  Cidades');
    console.log(this.cidadeUsandoEntries);    
    console.groupEnd();
  }
}
