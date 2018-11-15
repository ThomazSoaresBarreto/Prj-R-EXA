import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { RadiologiaService } from '../radiologia.service'

@Component({
  selector: 'mt-modelogesso',
  templateUrl: './modelogesso.component.html',
  styleUrls: ['./modelogesso.component.css']
})
export class ModelogessoComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }


  clickModeloGesso(){
    this.radiologiaService.isModeloGesso = !this.radiologiaService.isModeloGesso
  }

  fZocalado(){
    this.radiologiaService.modeloGesso.isZocalado = !this.radiologiaService.modeloGesso.isZocalado
    if(this.radiologiaService.modeloGesso.isZocalado){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.modeloGesso.idZocalado}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.modeloGesso.idZocalado}`)
    }
  }
  fTrabalho(){
    this.radiologiaService.modeloGesso.isTrabalho = !this.radiologiaService.modeloGesso.isTrabalho
    if(this.radiologiaService.modeloGesso.isTrabalho){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.modeloGesso.idTrabalho}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.modeloGesso.idTrabalho}`)
    }
  }
  fEscaneamentoModelo(){
    this.radiologiaService.modeloGesso.isEscaneamentoModelo = !this.radiologiaService.modeloGesso.isEscaneamentoModelo
    if(this.radiologiaService.modeloGesso.isEscaneamentoModelo){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.modeloGesso.idEscaneamentoModelo}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.modeloGesso.idEscaneamentoModelo}`)
    }
  }

}
