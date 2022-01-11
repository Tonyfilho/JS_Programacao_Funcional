import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  pessoas = [
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

  numeros = [2, 4, 5, 7, 8, 77, 0];
  nomes = ['ANTONIO', 'DEBORA', 'JUAN', 'RAQUEL'];
  fahrenheit = [-10, -2, -3, 10, 50, 150, 669];
  constructor() {}
  ngOnInit(): void {
    // console.log('MapArrayIdade : ' ,this.mapArrayIdate);
    // console.log('Menor : ' ,this.mapArrayMenorQ18Filtrado);
    // console.log('Maior : ' ,this.mapArrayMaiorQ18Filtrado);
   // console.log('Var Numero do Map x 2', this.numerosMap); // Valores Mapeados com função anonima
   // console.log('Nomes LowCase', this.nomesLowcase); // Valores Map transformados em Lowcase
   console.table(this.celsiusArrow);
   console.table(this.celsiusFuncAnonima);
  }
  /**No MAP passamos uma função de callback, onde vai INTERAR por cada item do Array mapeado */
  mapArrayIdate = this.pessoas.map((age) => age.idade > 18);
  mapArrayMenorQ18Filtrado = this.pessoas
    .map((age) => age.idade > 18)
    .filter((menorDe16) => menorDe16 == false);
  mapArrayMaiorQ18Filtrado = this.pessoas
    .map((age) => age.idade > 18)
    .filter((maiorDe16) => maiorDe16 == true);

  // MAP com função anonima
  numerosMap = this.numeros.map(function (numero) {
    console.log('Var Numero do Map', numero); // simplemente repete o valores do array
    return numero * 2;
  });
  // MAP com Arrow Function
  numerosMapArraw = this.numeros.map((arrayElem) => arrayElem * 2);

  // MAP vou transformar o Array nomes que é upcase em lowcase
  nomesLowcase = this.nomes.map((arrayElem) => arrayElem.toLowerCase());

 // MAP conversor de celsius para fahrenheit

 celsiusArrow = this.fahrenheit.map(elem => Math.round((elem -32) * 5/9) ); //Arrow Function
 celsiusFuncAnonima = this.fahrenheit.map(function(elem){ // Função anonima
   return Math.round((elem - 32) * 5/9);
 })


}
