import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  pessoas = [
    {
      nome: 'Ayrton', idade: 27, cidade: 'Setubal', sexo: 'M',
    },
    {
      nome: 'João', idade: 14, cidade: 'Lisboa', sexo: 'M',
    },
    {
      nome: 'Maria', idade: 23, cidade: 'Setubal', sexo: 'F',
    },
    {
      nome: 'Joana', idade: 21, cidade: 'Lisboa', sexo: 'F',
    },
    {
      nome: 'Lucas', idade: 32, cidade: 'Lisboa', sexo: 'M',
    },
    {
      nome: 'Mateus', idade: 15, cidade: 'QdoAnjo', sexo: 'M',
    },
    {
      nome: 'Isa', idade: 23, cidade: 'Setubal', sexo: 'F',
    },
    {
      nome: 'Luiza', idade: 17, cidade: 'QdoAnjo', sexo: 'F',
    },
  ];
  numeros = [2, 4, 5, 7, 8, 77, 0];
  nomes = ['ANTONIO', 'DEBORA', 'JUAN', 'RAQUEL'];
  arrayDuplicados = [1, 4, 5, 4, 6, 5, 10, 50, 150, 50, 669];
  constructor() { }

  ngOnInit(): void {
    console.table(this.mult2);
    console.table(this.mult2b);
    console.table(this.filMapJuntos);
    console.table(this.removeNumerosDuplicados);
  }
  // FILTER() permite filtrar algumas  informações, seja de um OBJETO ou de um ARRAY
  // O Filter() Retorna um novo Array filtrado do q for TRUE


  // Filtrando numeros mult2 usando Arrow Function 
  mult2 = this.numeros.filter((elem) => elem % 2 === 0);
  // Filtrando usando Função anonima
  mult2b = this.numeros.filter(function (elem) { if (elem % 2 === 0) { return true } else { return false } });

  // Filtra e Maper, FILTER() e MAP() Juntos
  filMapJuntos = this.numeros.filter(elem => elem % 2 === 0).map(elem => elem * 3);

  // Filtrando e Removendo Numeros Duplicados
  removeNumerosDuplicados = this.arrayDuplicados.filter((elem, index, array) => array.indexOf(elem) === index);

// const [nome1: any, nome2: any, nome3: any, nome4: any]  = this.nomes;

}
