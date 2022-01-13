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
  constructor() { }

  ngOnInit(): void {
  }

}
