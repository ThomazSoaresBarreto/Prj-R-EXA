import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { RadiologiaService } from '../radiologia.service'

@Component({
  selector: 'mt-radiografia-extraorais',
  templateUrl: './radiografia-extraorais.component.html',
  styleUrls: ['./radiografia-extraorais.component.css']
})
export class RadiografiaExtraoraisComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }


  clickRadiografiaExtraorais(){
    this.radiologiaService.isRadiografiaExtraorais = !this.radiologiaService.isRadiografiaExtraorais
  }

  fPanoramica(){
    this.radiologiaService.radiografiaExtraorais.isPanoramica = !this.radiologiaService.radiografiaExtraorais.isPanoramica
    if(this.radiologiaService.radiografiaExtraorais.isPanoramica){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPanoramica}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPanoramica}`)
    }
  }
  fCefalometricaPerfil(){
    this.radiologiaService.radiografiaExtraorais.isCefalometricaPerfil = !this.radiologiaService.radiografiaExtraorais.isCefalometricaPerfil
    if(this.radiologiaService.radiografiaExtraorais.isCefalometricaPerfil){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idCefalometricaPerfil}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idCefalometricaPerfil}`)
    }
  }
  fPA(){
    this.radiologiaService.radiografiaExtraorais.isPA = !this.radiologiaService.radiografiaExtraorais.isPA
    if(this.radiologiaService.radiografiaExtraorais.isPA){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPA}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPA}`)
    }
  }
  fMaoPunho(){
    this.radiologiaService.radiografiaExtraorais.isMaoPunho = !this.radiologiaService.radiografiaExtraorais.isMaoPunho
    if(this.radiologiaService.radiografiaExtraorais.isMaoPunho){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idMaoPunho}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idMaoPunho}`)
    }
  }


  fTipEdge(){
    this.radiologiaService.radiografiaExtraorais.isTipEdge = !this.radiologiaService.radiografiaExtraorais.isTipEdge
    if(this.radiologiaService.radiografiaExtraorais.isTipEdge){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idTipEdge}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idTipEdge}`)
    }
    this.fTracado()
  }
  fTweed(){
    this.radiologiaService.radiografiaExtraorais.isTweed = !this.radiologiaService.radiografiaExtraorais.isTweed
    if(this.radiologiaService.radiografiaExtraorais.isTweed){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idTweed}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idTweed}`)
    }
    this.fTracado()
  }
  fDelmanto(){
    this.radiologiaService.radiografiaExtraorais.isDelmanto = !this.radiologiaService.radiografiaExtraorais.isDelmanto
    if(this.radiologiaService.radiografiaExtraorais.isDelmanto){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idDelmanto}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idDelmanto}`)
    }
    this.fTracado()
  }
  fPetrovic(){
    this.radiologiaService.radiografiaExtraorais.isPetrovic = !this.radiologiaService.radiografiaExtraorais.isPetrovic
    if(this.radiologiaService.radiografiaExtraorais.isPetrovic){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPetrovic}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPetrovic}`)
    }
    this.fTracado()
  }
  fErupcao3Molar(){
    this.radiologiaService.radiografiaExtraorais.isErupcao3Molar = !this.radiologiaService.radiografiaExtraorais.isErupcao3Molar
    if(this.radiologiaService.radiografiaExtraorais.isErupcao3Molar){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idErupcao3Molar}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idErupcao3Molar}`)
    }
    this.fTracado()
  }
  fRicketts(){
    this.radiologiaService.radiografiaExtraorais.isRicketts = !this.radiologiaService.radiografiaExtraorais.isRicketts
    if(this.radiologiaService.radiografiaExtraorais.isRicketts){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idRicketts}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idRicketts}`)
    }
    this.fTracado()
  }
  fBimler(){
    this.radiologiaService.radiografiaExtraorais.isBimler = !this.radiologiaService.radiografiaExtraorais.isBimler
    if(this.radiologiaService.radiografiaExtraorais.isBimler){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idBimler}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idBimler}`)
    }
    this.fTracado()
  }
  fJarabak(){
    this.radiologiaService.radiografiaExtraorais.isJarabak = !this.radiologiaService.radiografiaExtraorais.isJarabak
    if(this.radiologiaService.radiografiaExtraorais.isJarabak){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idJarabak}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idJarabak}`)
    }
    this.fTracado()
  }
  fIBEO(){
    this.radiologiaService.radiografiaExtraorais.isIBEO = !this.radiologiaService.radiografiaExtraorais.isIBEO
    if(this.radiologiaService.radiografiaExtraorais.isIBEO){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idIBEO}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idIBEO}`)
    }
    this.fTracado()
  }
  fDowns(){
    this.radiologiaService.radiografiaExtraorais.isDowns = !this.radiologiaService.radiografiaExtraorais.isDowns
    if(this.radiologiaService.radiografiaExtraorais.isDowns){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idDowns}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idDowns}`)
    }
    this.fTracado()
  }
  fUspUnicamp(){
    this.radiologiaService.radiografiaExtraorais.isUspUnicamp = !this.radiologiaService.radiografiaExtraorais.isUspUnicamp
    if(this.radiologiaService.radiografiaExtraorais.isUspUnicamp){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idUspUnicamp}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idUspUnicamp}`)
    }
    this.fTracado()
  }
  fRickettsFrontal(){
    this.radiologiaService.radiografiaExtraorais.isRickettsFrontal = !this.radiologiaService.radiografiaExtraorais.isRickettsFrontal
    if(this.radiologiaService.radiografiaExtraorais.isRickettsFrontal){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idRickettsFrontal}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idRickettsFrontal}`)
    }
    this.fTracado()
  }
  fAdenoides(){
    this.radiologiaService.radiografiaExtraorais.isAdenoides = !this.radiologiaService.radiografiaExtraorais.isAdenoides
    if(this.radiologiaService.radiografiaExtraorais.isAdenoides){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idAdenoides}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idAdenoides}`)
    }
    this.fTracado()
  }
  fSchwarz(){
    this.radiologiaService.radiografiaExtraorais.isSchwarz = !this.radiologiaService.radiografiaExtraorais.isSchwarz
    if(this.radiologiaService.radiografiaExtraorais.isSchwarz){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idSchwarz}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idSchwarz}`)
    }
    this.fTracado()
  }
  fPadraoProfis(){
    this.radiologiaService.radiografiaExtraorais.isPadraoProfis = !this.radiologiaService.radiografiaExtraorais.isPadraoProfis
    if(this.radiologiaService.radiografiaExtraorais.isPadraoProfis){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPadraoProfis}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idPadraoProfis}`)
    }
    this.fTracado()
  }

  fMacNamara(){
    this.radiologiaService.radiografiaExtraorais.isMacNamara = !this.radiologiaService.radiografiaExtraorais.isMacNamara
    if(this.radiologiaService.radiografiaExtraorais.isMacNamara){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idMacNamara}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idMacNamara}`)
    }
    this.fTracado()
  }
  fSteiner(){
    this.radiologiaService.radiografiaExtraorais.isSteiner = !this.radiologiaService.radiografiaExtraorais.isSteiner
    if(this.radiologiaService.radiografiaExtraorais.isSteiner){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idSteiner}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idSteiner}`)
    }
    this.fTracado()
  }
  fVJMJ(){
    this.radiologiaService.radiografiaExtraorais.isVJMJ = !this.radiologiaService.radiografiaExtraorais.isVJMJ
    if(this.radiologiaService.radiografiaExtraorais.isVJMJ){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idVJMJ}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idVJMJ}`)
    }
    this.fTracado()
  }
  fUSP(){
    this.radiologiaService.radiografiaExtraorais.isUSP = !this.radiologiaService.radiografiaExtraorais.isUSP
    if(this.radiologiaService.radiografiaExtraorais.isUSP){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idUSP}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.radiografiaExtraorais.idUSP}`)
    }
    this.fTracado()
  }

  fTracado(){
    if( this.radiologiaService.radiografiaExtraorais.isTipEdge || this.radiologiaService.radiografiaExtraorais.isTweed || this.radiologiaService.radiografiaExtraorais.isDelmanto ||
        this.radiologiaService.radiografiaExtraorais.isPetrovic || this.radiologiaService.radiografiaExtraorais.isErupcao3Molar || this.radiologiaService.radiografiaExtraorais.isRicketts || this.radiologiaService.radiografiaExtraorais.isBimler ||
        this.radiologiaService.radiografiaExtraorais.isJarabak || this.radiologiaService.radiografiaExtraorais.isIBEO || this.radiologiaService.radiografiaExtraorais.isDowns || this.radiologiaService.radiografiaExtraorais.isUspUnicamp ||
        this.radiologiaService.radiografiaExtraorais.isRickettsFrontal || this.radiologiaService.radiografiaExtraorais.isAdenoides || this.radiologiaService.radiografiaExtraorais.isSchwarz || this.radiologiaService.radiografiaExtraorais.isPadraoProfis ||
        this.radiologiaService.radiografiaExtraorais.isMacNamara || this.radiologiaService.radiografiaExtraorais.isSteiner || this.radiologiaService.radiografiaExtraorais.isVJMJ || this.radiologiaService.radiografiaExtraorais.isUSP){
          this.radiologiaService.radiografiaExtraorais.isTracado = true
        }else{
          this.radiologiaService.radiografiaExtraorais.isTracado = false
        }
  }

  habTracado : boolean = false
  fHabTracado(){
    this.habTracado = !this.habTracado
  }

}
