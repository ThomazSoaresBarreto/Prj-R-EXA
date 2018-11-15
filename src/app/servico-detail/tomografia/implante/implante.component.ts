import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'

import { OdontogramaComponent } from '../../odontograma/odontograma.component'


@Component({
  selector: 'mt-implante',
  templateUrl: './implante.component.html',
  styleUrls: ['./implante.component.css']
})
export class ImplanteComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }

  fClickImplante(){
    this.tomografiaService.isImplante = !this.tomografiaService.isImplante
    this.tomografiaService.isApresentaOdontogramaImplante=true
  }

  checkGuia(origem: number){
    if(origem == 1){
      if(this.tomografiaService.implante.isSemGuia){
        this.tomografiaService.implante.isSemGuia = false
        this.tomografiaService.clearImplateSemGuia()
      }else{
        this.tomografiaService.implante.isComGuia = false
        this.tomografiaService.implante.isSemGuia = true
        this.notificationService.
          notify(`Você adicionou na lista de exames o item ${this.tomografiaService.implante.idImplante} - ${this.tomografiaService.implante.idSemGuia}`)
      }
    }else{
      if(this.tomografiaService.implante.isComGuia){
        this.tomografiaService.implante.isComGuia=false
        this.tomografiaService.clearImplateComGuia()
      }else{
        this.tomografiaService.implante.isComGuia = true
        this.tomografiaService.implante.isSemGuia = false
        this.notificationService.
          notify(`Você adicionou na lista de exames o item ${this.tomografiaService.implante.idImplante} - ${this.tomografiaService.implante.idComGuia}`)
      }
    }
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

  Modal(){
    this.tomografiaService.isApresentaOdontogramaImplante = !this.tomografiaService.isApresentaOdontogramaImplante
  }

  updateFromChild(respostaOdontograma){
    this.tomografiaService.implanteOdontograma = respostaOdontograma
  }

  limparOdontograma(){
    this.tomografiaService.implanteOdontograma = []
    this.tomografiaService.isApresentaOdontogramaImplante=false
  }

}
