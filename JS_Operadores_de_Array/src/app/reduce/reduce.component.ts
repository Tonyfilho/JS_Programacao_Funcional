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
  numeros = [2, 4, 5, 7, 8, 77, 0];
  nomes = ['ANTONIO', 'DEBORA', 'JUAN', 'RAQUEL'];
  fahrenheit = [-10, -2, -3, 10, 50, 150, 669];

  constructor() {


    function programacaoImperativa(params: any = [{}]): any {
      //OBS: Falta por Filtros se o Objeto PARÁMENTRO aqui chamado de params EXISTE, Outro IF e ELSE; tudo isto aninhado. 
      //Obs: Falta por FILTROS (IF , ELSE IF E ELSE), para checar se este NOVO Objeto já Existe.
      // Para funcionar sem estes Blocos, tive q por no Objeto masculinoOuFeminino masculino: ['AQUI'], feminino: ['AQUI'] strings vazias.
      // Com isto o console.log() desta função, vai ter 'strings vazias' no index 0,
      // Em outras palavras, este simples codigo ficaria muito, mas muito grande.
      const masculinoOuFeminino = {masculino: [''], feminino: ['']};      
      params.forEach((element: any) => {        
          if (element.sexo == 'M') {            
            masculinoOuFeminino.masculino.push(element)
          }
          if (element.sexo == 'F') {
            masculinoOuFeminino.feminino.push(element)
          }
      });   
 
     return masculinoOuFeminino;
   }
  //  console.log('Programação Imperativa',programacaoImperativa(this.pessoas));
   }

  ngOnInit(): void {
    // console.log('ArrowFunction', this.lancamentos);
    // console.log('AnonymousFunction', this.lancamentos2);
    // console.table(this.sexoMouF);
    // console.table(this.sexoMouF2);
    // console.table(this.maiorDe18);
    // console.table(this.maioresDe18Maculinos);
    // console.table(this.maioresDe18Femeas);
    // console.table(this.maioresEMenores);
    //  console.table(this.masculinoOuFeminino);    
    //  console.table(this.valorMultiplicado);
    //  console.log(this.maioresDe18EFeminino);
    
    //  console.log(this.filtromaiorEFeminino);
    console.log(this.exercicioMascOuFem);
    

  }
  

  // O REDUCE() Recebe um Array e retorna qualquer coisa, seja um PRIMITIVO ou OBJECTO ou ARRAY ou OBSERVABLE
  // ESTAMOS ESTUDANDO PROGRAMAÇÃO FUNCIONAL  ao invez de programação IMPERATIVA.

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

  //REDUCE maiores e menores usando a propriedade do objeto
  maioresEMenores = this.pessoas.reduce((newArray: any, actualArray) => {
    const idade = actualArray.idade >= 18 ? 'maiores' : 'menores';
    newArray[idade].push(actualArray);
    
    return newArray;},{maiores: [] , menores:[]});
// REDUCE Filtrando Masculino e Feminino Usando Anonymous Function
  masculinoOuFeminino = this.pessoas.reduce((newArray: any, actualArray) => {
    const sexo = actualArray?.sexo === 'M' ? 'M': 'F';
    newArray[sexo].push(actualArray);        
    return newArray}, {M:[], F:[]});

// REDUCE e SPREAD ex:01 multiplicando o valor do array por 2
  valorMultiplicado = this.numeros.reduce((newArray: any, actualArray) => {      
    return [...newArray, actualArray * 2];
  }, [])

//Reduce com spread
// maioresDe18EFeminino = this.pessoas.reduce((newArray:any, actualArray) => {
//   // const localArray = actualArray.sexo == 'F' && actualArray.idade >= 18 ? actualArray: ''
//   // console.log(localArray);
//   // return [...newArray, actualArray.cidade ];
//  return newArray.push( actualArray.sexo == 'F' && actualArray.idade >= 18 ? actualArray: '');

// }, { maioresSexoFeminino: []});

// filtromaiorEFeminino = this.pessoas.reduce((acumulador: any, arrayAtual) => {
//    arrayAtual.idade >= 18 && arrayAtual.sexo == 'F' ? acumulador.push(arrayAtual) : '';
//    return acumulador
// }, { pessoas: []})
 
 
 /**
  * Exemplo separando MASCULINO OU FEMININO
  */

  exercicioMascOuFem = this.pessoas.reduce((acumulador: any, atual) => {
      const sexo = atual.sexo == 'M' ? 'M' : 'F';
      acumulador[sexo].push(atual);
    return acumulador;
  }, {M:[], F:[]})




}
