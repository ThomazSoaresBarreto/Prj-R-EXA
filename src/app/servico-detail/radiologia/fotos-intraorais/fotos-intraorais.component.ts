import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { RadiologiaService } from '../radiologia.service'

@Component({
  selector: 'mt-fotos-intraorais',
  templateUrl: './fotos-intraorais.component.html',
  styleUrls: ['./fotos-intraorais.component.css']
})
export class FotosIntraoraisComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }


  clickFotosintraorais(){
    this.radiologiaService.isFotosintraorais = !this.radiologiaService.isFotosintraorais
  }

  fFrontal(){
    this.radiologiaService.fotosIntraorais.isFrontal = !this.radiologiaService.fotosIntraorais.isFrontal
    if(this.radiologiaService.fotosIntraorais.isFrontal){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosIntraorais.idFrontal}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosIntraorais.idFrontal}`)
    }
  }

  fDireita(){
    this.radiologiaService.fotosIntraorais.isDireita = !this.radiologiaService.fotosIntraorais.isDireita
    if(this.radiologiaService.fotosIntraorais.isDireita){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosIntraorais.idDireita}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosIntraorais.idDireita}`)
    }
  }
  fEsquerda(){
    this.radiologiaService.fotosIntraorais.isEsquerda = !this.radiologiaService.fotosIntraorais.isEsquerda
    if(this.radiologiaService.fotosIntraorais.isEsquerda){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosIntraorais.idEsquerda}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosIntraorais.idEsquerda}`)
    }
  }
  fSuperior(){
    this.radiologiaService.fotosIntraorais.isSuperior = !this.radiologiaService.fotosIntraorais.isSuperior
    if(this.radiologiaService.fotosIntraorais.isSuperior){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosIntraorais.idSuperior}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosIntraorais.idSuperior}`)
    }
  }
  fInferior(){
    this.radiologiaService.fotosIntraorais.isInferior = !this.radiologiaService.fotosIntraorais.isInferior
    if(this.radiologiaService.fotosIntraorais.isInferior){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosIntraorais.idInferior}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosIntraorais.idInferior}`)
    }
  }



}
