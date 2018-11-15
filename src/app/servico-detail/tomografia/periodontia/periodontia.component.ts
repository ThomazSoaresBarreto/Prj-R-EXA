import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'


import { OdontogramaComponent } from '../../odontograma/odontograma.component'

declare var $: any;
@Component({
  selector: 'mt-periodontia',
  templateUrl: './periodontia.component.html',
  styleUrls: ['./periodontia.component.css']
})
export class PeriodontiaComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {}


  clickPeriodontia(){
    this.tomografiaService.isPeriodontia = !this.tomografiaService.isPeriodontia
    this.tomografiaService.isapresentaOdontograma=true
  }

  fMsgSnackBar(isOrigem:any, idOrigem:any){
    switch(isOrigem){
      case isOrigem=true:{
        this.notificationService.notify(`Você adicionou na lista de exames o item ${idOrigem}`)
        break;
      }
      case isOrigem=false:{
        this.notificationService.notify(`Você retirou da lista de exames o item ${idOrigem}`)
        break;
      }
    }
  }


  model: any;
  fOutras(){
    if(this.tomografiaService.isOutrasPeriodontia == true){
        this.tomografiaService.periodontia.isOutras = false
        this.tomografiaService.periodontia.idOutras = ""
    }
  }

  fAtualizaOutras(){
    if(this.tomografiaService.periodontia.dscOutras.length >0 ){
      this.tomografiaService.periodontia.isOutras = true
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.tomografiaService.periodontia.dscOutras}`)
    }else{
      this.tomografiaService.periodontia.isOutras = false

      this.notificationService.notify(`Você retirou da lista de exames o item ${this.tomografiaService.periodontia.dscOutras}`)
    }
  }


  Modal(){
    this.tomografiaService.isapresentaOdontograma = !this.tomografiaService.isapresentaOdontograma
  }


  updateFromChild(respostaOdontograma){
    this.tomografiaService.periodontiaOdontograma = respostaOdontograma
  }

  limparOdontograma(){
    this.tomografiaService.isapresentaOdontograma = false
    this.tomografiaService.periodontiaOdontograma = []
  }


}
