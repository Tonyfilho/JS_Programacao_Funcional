import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-exercicios',
  templateUrl: './reduce-exercicios.component.html',
  
})
export class ReduceExerciciosComponent implements OnInit {
  mascuEFemi = {};
  cidades = {};
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

  constructor() {
    /**
     * exercicio de agrupamento por Masculino ou Feminino, 
     * como estamos criando uma OBJETO VAZIO, temos que criar na 1º iteração o mesmo
     */
   this.mascuEFemi = this.pessoas.reduce((acumuladorSexo: any, array) => {
        if(!acumuladorSexo[array.sexo]){
           /**Caso não exista este OBJETO no RETORNO, O IF é TRUE, e criamos
            *  aqui um Objeto Vazio */
           acumuladorSexo[array.sexo] = [];
        }
        acumuladorSexo[array.sexo].push(array);
      return acumuladorSexo;
    },{} )

    console.log('Agrupando por Sexo: ', this.mascuEFemi);
   }

  ngOnInit(): void {
    /**
     * Agrupando por CIDADE
     * como estamos criando uma OBJETO VAZIO, temos que criar na 1º iteração o mesmo
     */
    
    this.cidades = this.pessoas.reduce((acumCidade: any, array) => {
       if (!acumCidade[array.cidade]) {
           acumCidade[array.cidade] = new Array();
       }

        acumCidade[array.cidade].push(array);
    return acumCidade;
    }, {})
    
    console.log('Agrupando por Cidades : ', this.cidades);

  }

}
