import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'
import { OdontogramaComponent } from '../../odontograma/odontograma.component'

@Component({
  selector: 'mt-outras-finalidades',
  templateUrl: './outras-finalidades.component.html',
  styleUrls: ['./outras-finalidades.component.css']
})
export class OutrasFinalidadesComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() { }

  clickOutrasFinalidades(){
    this.tomografiaService.isOutrasFinalidadesMenu = !this.tomografiaService.isOutrasFinalidadesMenu
    this.tomografiaService.isApresentaOdontogramaOutrasFinalidades = true
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

  fOutras(){
    if(this.tomografiaService.isOutrasFinalidades == true){
      this.tomografiaService.outrasFinalidades.isOutras = false
      this.tomografiaService.outrasFinalidades.idOutras = ""
    }
  }

  fAtualizaOutras(){
    if(this.tomografiaService.outrasFinalidades.dscOutras.length >0){
      this.tomografiaService.outrasFinalidades.isOutras = true
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.tomografiaService.outrasFinalidades.dscOutras}`)
    }else{
      this.tomografiaService.outrasFinalidades.isOutras = false
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.tomografiaService.outrasFinalidades.dscOutras}`)
    }
  }

  Modal(){
    this.tomografiaService.isApresentaOdontogramaOutrasFinalidades = !this.tomografiaService.isApresentaOdontogramaOutrasFinalidades
  }


  updateFromChild(respostaOdontograma){
    this.tomografiaService.outrasFinalidadesOdontograma = respostaOdontograma
  }

  limparOdontograma(){
    this.tomografiaService.isApresentaOdontogramaOutrasFinalidades = false
    this.tomografiaService.outrasFinalidadesOdontograma = []
  }



}
