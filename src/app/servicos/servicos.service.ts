import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import {Observable} from 'rxjs'

import {Servico} from "./servico/servico.model";
import {MenuItem} from "../restaurant-detail/menu-item/menu-item.model";

import {MEAT_API} from '../app.api'






@Injectable()
export class ServicosService {
// ATENÇÃO DESABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
  servicosDados: Servico[] = [
    {
      "id": "tomo",
      "name": "TOMOGRAFIA COMPUTADORIZADA",
      "category": "Serviço de Tomografia Computadorizada",
      "descricao": "A Tomografia Computadorizada Cone Beam (i-CAT®) fornece uma completa visualização de todas as estruturas ósseas orais e maxilofaciais.",
      "imagePathp": "assets/img/servicos/icon_tomo-p.png",
      "imagePath": "assets/img/servicos/icon_tomo.png",
      "servicos": "Protocolo para cirurgia guiada, Implante, Outras finalidades, Tomografia de face, Cefalometria"
    },
    {
      "id": "radio",
      "name": "RADIOLOGIA DIGITAL",
      "category": "Serviço de Radiologia Digital",
      "descricao": "Radiografias Panorâmicas, Cefalométricas e Periapicais. A tecnologia digital produz imagens de maior nitidez em relação aos aparelhos convencionais.",
      "imagePath": "assets/img/servicos/icon_doc_rad.png",
      "imagePathp": "assets/img/servicos/icon_doc_rad-p.png",
      "servicos": "Fotos intraorais, Fotos extraorais, Radiografias extraorais, modelo, Radiografia intraorais"
    },
    {
      "id": "docs",
      "name": "DOCUMENTAÇÕES ORTODÔNTICAS",
      "category": "Serviço de Documentações Ortodônticas",
      "descricao": "Exames necessários para o planejamento do tratamento ortodôntico e de reabilitação oral. Os exames incluem fotografia intra-oral e extra-oral, modelos zocalados e traçados cefalométricos.",
      "imagePath": "assets/img/servicos/icon_doc_ort.png",
      "imagePathp": "assets/img/servicos/icon_doc_ort-p.png",
      "servicos": "Fotos panorâmica, traçado avulso, cefalométrica de perfil, peripical de incisivos, bite wing, escaneamento intraoral"
    },
    {
      "id": "escaneamento",
      "name": "ESCANEAMENTO INTRAORAL",
      "category": "Serviço de Escaneamento Intraoral",
      "descricao": "O escaneamento intraoral permite a obtenção de modelos 3D de forma rápida e é obtida de forma direta, livre de eventuais falhas como no processo de registro em cera.",
      "imagePath": "assets/img/servicos/icon_escaneamento_intra.png",
      "imagePathp": "assets/img/servicos/icon_escaneamento_intra-p.png",
      "servicos": "modelo impresso"
    }
  ]

  constructor(private http: HttpClient ){}

  servicos(search?: string): Observable<Servico[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().append('q', search)
    }
    return this.http.get<Servico[]>(`${MEAT_API}/servicos`, {params: params})
  }

// ATENÇÃO HABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
  servicoById(id: string): Observable<Servico> {
    return this.http.get<Servico>(`${MEAT_API}/servicos/${id}`)
  }

// ATENÇÃO DESABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
  fservicoById(id: string):Servico{
    return this.servicosDados.find(obj => obj.id === id)
  }


}
