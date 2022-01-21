import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
})
export class FlatComponent implements OnInit {
  /**
   * Estudaremos o  FLAT() E FLATMAP(), mas usarei um ex: do MAP para Justificar o uso do FLAT();
   * Usamos o FLAT() ou FLATMAP(), quando precisamos transformar um ARRAY DE ARRAY em um simples ARRAY.
   * EX:
   */

  usuariosResposta = [
    {
      nome: 'tony',
      resposta: [
        { questao_id: '001,', acertou: false },
        { questao_id: '002,', acertou: true },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: true },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'debora',
      resposta: [
        { questao_id: '001,', acertou: true },
        { questao_id: '002,', acertou: false },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: false },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'juan',
      resposta: [
        { questao_id: '001,', acertou: false },
        { questao_id: '002,', acertou: true },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: true },
        { questao_id: '005,', acertou: true },
      ],
    },
    {
      nome: 'orelha',
      resposta: [
        { questao_id: '001,', acertou: true },
        { questao_id: '002,', acertou: false },
        { questao_id: '003,', acertou: true },
        { questao_id: '004,', acertou: false },
        { questao_id: '005,', acertou: true },
      ],
    },
  ];
  constructor() {
    /**
     * Se for para separar por nome, ou resposta usando o MAP,
     *  teremos um NOVO ARRAY dentro de OUTRO, Ex; 
     * arrayMapNome = this.usuariosResposta.map(resposta => resposta.nome);
     * OU
     * arrayMapResposta = usuariosResposta.map(resposta => resposta.resposta);
     * Array(4)
          0: (5) [{…}, {…}, {…}, {…}, {…}]
          1: (5) [{…}, {…}, {…}, {…}, {…}]
          2: (5) [{…}, {…}, {…}, {…}, {…}]
          3: (5) [{…}, {…}, {…}, {…}, {…}]
     */
    const arrayMapNome = this.usuariosResposta.map((resposta) => resposta.nome);
    console.table(arrayMapNome);
    const arrayMapResposta = this.usuariosResposta.map(
      (resposta) => resposta.resposta
    );
    console.table(arrayMapResposta);
  }

  ngOnInit(): void {
    /**
     * no arrayMapResposta,termos como resposta o array de array, o FLAT(), veio para 
     * transformar isto em um simples ARRAY();
     * O FLAT(1), recebe paramentros de NIVEIS, sendo o 1 o DEFAULT e pode ser OMITIDO
     * , o 0 retorna sem  modificações, 2.... serve para um array de array de array, algo
     * muito pertubador.
     * 1º EX: usarei o MAP() e depois o FLAT();
     * Array(20) 
     *  0: {questao_id: '001,', acertou: false}
        1: {questao_id: '002,', acertou: true}
        2: {questao_id: '003,', acertou: true}
        3: {questao_id: '004,', acertou: true}
        4: {questao_id: '005,', acertou: true}
        5: {questao_id: '001,', acertou: true}
        6: {questao_id: '002,', acertou: false}
        7: {questao_id: '003,', acertou: true}
        8: {questao_id: '004,', acertou: false}
        9: {questao_id: '005,', acertou: true}
        10: {questao_id: '001,', acertou: false}
        11: {questao_id: '002,', acertou: true}
        12: {questao_id: '003,', acertou: true}
        13: {questao_id: '004,', acertou: true}
        14: {questao_id: '005,', acertou: true}
        15: {questao_id: '001,', acertou: true}
        16: {questao_id: '002,', acertou: false}
        17: {questao_id: '003,', acertou: true}
        18: {questao_id: '004,', acertou: false}
        19: {questao_id: '005,', acertou: true}
     * tenho 1 ARRAY com 20 Objetos
     */
     const mapComFlat = this.usuariosResposta.map(data => data.resposta).flat(); /**Aqui passamos o MAP() */
     console.log(mapComFlat);

     /**
      * Com o FlatMap() é mais simples, ele já faz o MAP e FLAT juntos
      * Array(20)
      * 0: {questao_id: '001,', acertou: false}
        1: {questao_id: '002,', acertou: true}
        2: {questao_id: '003,', acertou: true}
        3: {questao_id: '004,', acertou: true}
        4: {questao_id: '005,', acertou: true}
        5: {questao_id: '001,', acertou: true}
        6: {questao_id: '002,', acertou: false}
        7: {questao_id: '003,', acertou: true}
        8: {questao_id: '004,', acertou: false}
        9: {questao_id: '005,', acertou: true}
        10: {questao_id: '001,', acertou: false}
        11: {questao_id: '002,', acertou: true}
        12: {questao_id: '003,', acertou: true}
        13: {questao_id: '004,', acertou: true}
        14: {questao_id: '005,', acertou: true}
        15: {questao_id: '001,', acertou: true}
        16: {questao_id: '002,', acertou: false}
        17: {questao_id: '003,', acertou: true}
        18: {questao_id: '004,', acertou: false}
        19: {questao_id: '005,', acertou: true}
      */

     const flatMap = this.usuariosResposta.flatMap(data => data.resposta);
     console.table(flatMap);
  }
}
