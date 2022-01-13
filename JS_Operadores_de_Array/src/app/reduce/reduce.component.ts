import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',

})
export class ReduceComponent implements OnInit {
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
  rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe(ESA)', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }
  ];
  constructor() { }

  ngOnInit(): void {
    console.log('ArrowFunction', this.lancamentos);
    console.log('AnonymousFunction', this.lancamentos2);
    console.table(this.sexoMouF);
    console.table(this.sexoMouF2);
    console.table(this.maiorDe18);
    console.table(this.maioresDe18Maculinos);
    console.table(this.maioresDe18Femeas);

  }

  // O REDUCE() Recebe um Array e retorna qualquer coisa, seja um PRIMITIVO ou OBJECTO ou ARRAY ou OBSERVABLE

  // Neste exemplo, iremos SOMAR o total de laçamentos de foguetes
  lancamentos = this.rockets.reduce((newValue, actualArray) => newValue + actualArray.launches, 0);
  lancamentos2 = this.rockets.reduce(function (newValue, accurentArray) {
    return newValue + accurentArray.launches
  }, 0)

  //Neste Exemplo separeremos o OBJECTO PESSOAS por masculino e feminino

  sexoMouF = this.pessoas.reduce((newValue: any, actualArray: any) => {    
    if ( actualArray.sexo == 'M') {
      newValue.M.push(actualArray);
    }
    if (actualArray.sexo == 'F') 
    { newValue.F.push(actualArray) }
    return newValue;

  }, { M: [], F: [] });

  // O Mesmo REDUCE(), mas usando ARROW FUNCTION  e TERNARIO;
  sexoMouF2 = this.pessoas.reduce((newArray: any,actualArray: any) => {
     actualArray.sexo === 'M' ? newArray.M?.push(actualArray): newArray.F?.push(actualArray);
    return newArray;
  }, {M:[], F:[]});

  // Mesmo REDUCE() e TERNARIO mas usando a PROPRIEDADE do Objeto.

  sexoMouF3 = this.pessoas.reduce((newValue: any = '', accurateArray: any ) => {   
   accurateArray.sexo === 'M' ? newValue['M'].push(accurateArray): newValue['F'].push(accurateArray);
  return newValue;
  }, {M: [], F: []});

  maiorDe18 = this.pessoas.reduce((newArray: any, actualArray) => {
    actualArray.idade >= 18 ? newArray.maior.push(actualArray):''
    return newArray;
  }, {maior: []});
   //REDUCE() e Ternario, somente maiores de 18 e Homens anonymous functions
  maioresDe18Maculinos = this.pessoas.reduce(function(newArray: any, actualArray){
     actualArray.idade >= 18 && actualArray.sexo === 'M'? newArray.maiorEMasculino.push(actualArray): '';
    return newArray;
  }, {maiorEMasculino: []});
   //REDUCE() e Ternario, somente maiores de 18 e Mulheres Arrow Functions
  maioresDe18Femeas = this.pessoas.reduce((newArray: any, actualPessoas) => {
    actualPessoas.idade >= 18 && actualPessoas.sexo === 'F' ? newArray.maioresDe18Femeas.push(actualPessoas): '';
    return newArray;
  }, {maioresDe18Femeas: []})
}
