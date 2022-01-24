import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-execicios',
  templateUrl: './map-execicios.component.html',
})
export class MapExeciciosComponent implements OnInit {
  filtraNome!: any;
  filtraEMapearNomeEResposta!: any;
  filtraEMapeaReduceNomeResposta!: any;
  numeros = [2, 8, 9, 10, 12, 13, 15, 30];
  numerosMapVezes2!: number[];
  numerosReduceVezes2!: number[];
  numerosFilterPares!: number[];
  numerosReducePares!: number[];
  Pares!: any[];
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
     * Exercicios de MAP e FILTER
     * função que MAPEA e FILTRA
     */
    this.filtraNome = this.usuariosResposta.filter(
      (data) => data.nome === 'juan'
    );
    /**
     * Filtra, Mapea e filtra novamente retorna uma uma coleção de  Objeto q pertence ao 1 nome onde temos valores somente TRUE
     */
    this.filtraEMapearNomeEResposta = this.usuariosResposta
      .filter((data) => data.nome === 'orelha')
      .map((data) =>
        data.resposta.filter((resposta) => resposta.acertou == true)
      );

    /**
     * Filtra, Mapea e Reduso somente que for TRUE
     */
    this.filtraEMapeaReduceNomeResposta = this.usuariosResposta
      .filter((filtaNome) => filtaNome.nome === 'debora')
      .map((pegaResposta) => pegaResposta.resposta)
      .reduce((novo: any, atual) => {
        atual.map((data) =>
          data.acertou === true ? novo.push(data.acertou) : false
        );
        return novo;
      }, []);
    /**
     * MAP Mapea e Retorna somente Numeros multiplicados por 2
     */
    this.numerosMapVezes2 = this.numeros.map((numero) => numero * 2);
    /**
     * REDUCE fazer a função do Map e Retorna somente Numeros multiplicados por 2
     */
     this.numerosReduceVezes2 = this.numeros.reduce((novo2: number[], atual, index) => {            
       novo2.push(atual * 2)
      return novo2;
    }, []);

    /**
     * Filtra e Retorna somente Numeros PARES
     */
    this.numerosFilterPares = this.numeros.filter((numero) => numero % 2 == 0);

    /**
     * Reduce usado para filtrar e retornar  somente os Pares
     */
    this.numerosReducePares = this.numeros.reduce((novo: number[], atual) => {
      atual % 2 === 0 ? novo.push(atual) : null;
      return novo;
    }, []);
  }

  ngOnInit(): void {
    console.table(this.filtraNome);
    console.table(this.filtraEMapearNomeEResposta);
    console.table(this.filtraEMapeaReduceNomeResposta);
    console.table(this.numerosMapVezes2);
    console.table(this.numerosFilterPares);
    console.log('REDUCE',this.numerosReduceVezes2);
    console.table(this.numerosReducePares);
  }
}
