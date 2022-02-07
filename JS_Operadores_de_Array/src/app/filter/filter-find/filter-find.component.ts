import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-find',
  templateUrl: './filter-find.component.html',
  
})
/**
 * Diferença entre  o FILTER() e o FIND(), 
 * Filter retorna um  array de itens. OBs: Tem que  por o retorno do Filter Caso use
 * Find retorna somente 1 item.
 */
export class FilterFindComponent implements OnInit {
  userFilter_1!:any[];
  userFilter_2!:any[];
  userFindItem_5!: any;
 post = [
   {
     user_id: 1,
     id: 2,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
   {
     user_id: 1,
     id: 3,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
   {
     user_id: 1,
     id: 4,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
   {
     user_id: 1,
     id: 5,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
   {
     user_id: 2,
     id: 1,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
   {
     user_id: 2,
     id: 1,
     title: 'somente teste de title',
     body: 'é o que vem no corpo da mensagem bla bla bla '
   },
 ];
  constructor() {
   this.userFilter_1 = this.post.filter((itens) => {
    return  itens.user_id == 1
   })
   this.userFilter_2 = this.post.filter(itens => itens.user_id == 2);

   this.userFindItem_5 = this.post.find((item) => {
    return item.id == 5;
   })
   }

  ngOnInit(): void {
    console.group("Usando o Filter ")
    console.log('User1', this.userFilter_1);
    console.log('User2', this.userFilter_2);
    console.groupEnd()
    console.group("Usando o Find() Onde retorna o 1 item achado somente ")
    console.log('.userFindItem_5', this.userFindItem_5);
    console.groupEnd()
  }
  

}
