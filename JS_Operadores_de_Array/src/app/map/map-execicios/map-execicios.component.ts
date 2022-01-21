import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-execicios',
  templateUrl: './map-execicios.component.html',
  
})
export class MapExeciciosComponent implements OnInit {
  filtraNome!: any;
  filtraEMapearNomeEResposta!: any;
  filtraEMapeaReduceNomeResposta!: any;
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
    this.filtraNome = this.usuariosResposta.filter(data => data.nome === 'juan');
    /**
     * Filtra, Mapea e retorna uma uma coleção de  Objeto q pertence ao 1 nome
     */
    this.filtraEMapearNomeEResposta = this.usuariosResposta.filter(data => data.nome === 'orelha').map(data => data.resposta);

    /**
     * Filtra, Mapea e Reduso somente que for TRUE
     */
    this.filtraEMapeaReduceNomeResposta = this.usuariosResposta.filter(filtaNome => filtaNome.nome ==='debora').map(pegaResposta => pegaResposta.resposta).reduce((novo: any, atual) => {
       atual.map(data => data.acertou === true ? novo.push(data.acertou) : false )
      return novo;
    },[])
   }

  ngOnInit(): void {

    console.table(this.filtraNome);
    console.table(this.filtraEMapearNomeEResposta);
    console.table(this.filtraEMapeaReduceNomeResposta);
  }

}
