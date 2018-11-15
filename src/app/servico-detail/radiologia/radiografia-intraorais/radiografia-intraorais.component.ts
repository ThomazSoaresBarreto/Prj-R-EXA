import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { RadiologiaService } from '../radiologia.service'

@Component({
  selector: 'mt-radiografia-intraorais',
  templateUrl: './radiografia-intraorais.component.html',
  styleUrls: ['./radiografia-intraorais.component.css']
})
export class RadiografiaIntraoraisComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }


  clickRadioIntraorais(){
    this.radiologiaService.isRadioIntraorais = !this.radiologiaService.isRadioIntraorais
  }

  fCompleto(){
    this.radiologiaService.radiografiaIntraorais.isCompleto = !this.radiologiaService.radiografiaIntraorais.isCompleto
    if(this.radiologiaService.radiografiaIntraorais.isCompleto){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idCompleto}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idCompleto}`)
    }
  }
  fOdontograma(){
    this.radiologiaService.radiografiaIntraorais.isOdontograma = !this.radiologiaService.radiografiaIntraorais.isOdontograma
    if(this.radiologiaService.radiografiaIntraorais.isOdontograma){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idOdontograma}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idOdontograma}`)
    }
  }
  fOclusal(){
    this.radiologiaService.radiografiaIntraorais.isOclusal = !this.radiologiaService.radiografiaIntraorais.isOclusal
    if(this.radiologiaService.radiografiaIntraorais.isOclusal){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idOclusal}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idOclusal}`)
    }
  }
  fDireito(){
    this.radiologiaService.radiografiaIntraorais.isDireito = !this.radiologiaService.radiografiaIntraorais.isDireito
    if(this.radiologiaService.radiografiaIntraorais.isDireito){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idDireito}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idDireito}`)
    }
  }
  fPreMolares(){
    this.radiologiaService.radiografiaIntraorais.isPreMolares = !this.radiologiaService.radiografiaIntraorais.isPreMolares
    if(this.radiologiaService.radiografiaIntraorais.isPreMolares){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idPreMolares}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idPreMolares}`)
    }
  }
  fEsquerdo(){
    this.radiologiaService.radiografiaIntraorais.isEsquerdo = !this.radiologiaService.radiografiaIntraorais.isEsquerdo
    if(this.radiologiaService.radiografiaIntraorais.isEsquerdo){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idEsquerdo}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idEsquerdo}`)
    }
  }
  fMolares(){
    this.radiologiaService.radiografiaIntraorais.isMolares = !this.radiologiaService.radiografiaIntraorais.isMolares
    if(this.radiologiaService.radiografiaIntraorais.isMolares){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idMolares}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaIntraorais.idMolares}`)
    }
  }
}
