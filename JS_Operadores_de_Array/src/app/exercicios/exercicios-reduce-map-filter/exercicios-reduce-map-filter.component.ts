import { Component, OnInit } from '@angular/core';
/**
 * ************************Interfaces********************
 */
 export interface IPessoas {
  nome: string;
  idade: number;
  cidade: string;
  sexo: string;
}
export interface IAllPessoas {
  pessoas: IPessoas[];
}

interface IUsuariosResposta {
  nome: string;
  resposta: [
    {
      questao_id: string;
      acertou: boolean;
    }
  ];
}
interface IAllUsuariosResposta {
  usuarios: IUsuariosResposta[];
}
@Component({
  selector: 'app-exercicios-reduce-map-filter',
  templateUrl: './exercicios-reduce-map-filter.component.html',
})
export class ExerciciosReduceMapFilterComponent implements OnInit {
  /**
   * Exercicios FILTER(), MAP(); REDUCE() e SPREAD [...]
   */
  objectoENTRIES =  Object;
  usuario!: string[];
  usuarios!: string[];
  usuarioMensagens!: object[];
  usuariosAllMensagens!: object[];
  usuariosAllMensagensFlat!:object[];
  usuariosAllMensagensTrue!: object[];
  usuarioMensagensArrayComENTRIES!: object[];

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
     * Filtrando por Usuario
     */
    this.usuario = this.usuariosResposta
      .filter((use) => use.nome == 'debora')
      .flatMap((data) => data.nome);
    /**
     * Filtrando por Usuarios, usando FLATMAP()
     */
    this.usuarios = this.usuariosResposta
      .filter((user) => user.nome)
      .flatMap((user) => user.nome);
    /**
     * Filtrando mensagem por Usuarios
     */
    this.usuarioMensagens = this.usuariosResposta
      .filter((user) => user.nome == 'debora')
      .flatMap((userMensage) => userMensage.resposta);
    /**
     * Filtrando mensagem por Usuarios Usando OBJECT.ENTRIES fazendo o mesmo do REDUCE,
     * pois o ENTRIES retorna o INDICE das POSIÇÕES do  OBJETO, neste ex. retornou 0 ou 1,
     * sendo 0 a Key nome, e 1 a key mensagem.
     */
    this.usuarioMensagensArrayComENTRIES = Object.entries(
      this.usuarioMensagens
    ).flatMap((mensagens) => mensagens[1]);
    /**
     * MAP(), onde temos acesso a somente 1 dos ITENS do Objeto ou do Array, com isto recebemos um array de array
     */
    this.usuariosAllMensagens = this.usuariosResposta.map(
      (data) => data.resposta
    );
    /**
     * MAP() com FLAT() ou FLATMAP() onde temos um ARRAY de ARRAY reducido há 1 array
     */
    this.usuariosAllMensagensFlat = this.usuariosResposta.flatMap(res => res.resposta);
    /**
     * FLATMAP()e FILTER() onde quero somente todos resultados de RESPOSTA onde for TRUE.
     */
   this.usuariosAllMensagensTrue = this.usuariosResposta.flatMap(res => res.resposta).filter(res => res.acertou == true);
    /**
     * OBJECT:ENTRIES(), Transforma o OBJETO em ARRAY separando por KEY  PROPRIEDADE do Objeto, recebo um Array de Array
     */
    const arrayObjeto = this.objectoENTRIES.entries(this.usuariosAllMensagensTrue);
    /**
     * OBJECT:ENTRIES(), Transforma o OBJETO em ARRAY separando por KEY  PROPRIEDADE do Objeto
     */
     const arrayObjetoMap =this.objectoENTRIES.entries(this.usuariosAllMensagensTrue).map(obj => obj[0]);
  }

  ngOnInit(): void {
    console.group('Start de Filter e FlatMap');
    console.log(this.usuario);
    console.log(this.usuarios);
    console.log(this.usuarioMensagens);
    console.groupEnd();
    console.group(
      'Usando o Object.entries e FlatMap() INDICE das POSIÇÕES do  OBJETO, neste ex. retornou 0 ou 1,sendo 0 a Key nome, e 1 a key mensagem'
    );
    console.log(this.usuarioMensagensArrayComENTRIES);
    console.groupEnd();
    console.group(
      'Usando MAP para buscar 1 ITEM em um Array de objetos, retorna uma Array de Array'
    );
    console.log(this.usuariosAllMensagens);    
    console.groupEnd();
    console.group(
      'Usando FLATMAP(), onde 1 ITEM em um ARRAY de objetos, e retorna 1 ARRAY'
    );    
    console.log(this.usuariosAllMensagensFlat);
    console.log(this.usuariosAllMensagensTrue);
    console.log(this.objectoENTRIES.entries(this.usuariosAllMensagensTrue));
    console.groupEnd();
    
  }
}
