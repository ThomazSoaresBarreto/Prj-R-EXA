import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../shared/messages/notification.service'
import { EscaneamentointraoralModel } from './escaneamento-intraoral.model'
import { EscaneamentoIntraoralService } from './escaneamento-intraoral.service'

@Component({
  selector: 'mt-escaneamento-intraoral',
  templateUrl: './escaneamento-intraoral.component.html',
  styleUrls: ['./escaneamento-intraoral.component.css']
})
export class EscaneamentoIntraoralComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService) { }

  ngOnInit() {
  }


  fClickEscaneamentoIntraoral(){
    this.escaneamentoIntraoralService.isEscaneamentoIntraoral = !this.escaneamentoIntraoralService.isEscaneamentoIntraoral
  }


  fModeloImpresso(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isModeloImpresso){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idModeloImpresso}`)
      this.escaneamentoIntraoralService.escaneamentointraoral.isSemModeloImpresso = false
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idModeloImpresso}`)
    }
  }

  fSemModeloImpresso(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isSemModeloImpresso){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idSemModeloImpresso}`)
      this.escaneamentoIntraoralService.escaneamentointraoral.isModeloImpresso = false
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idSemModeloImpresso}`)
    }
  }

  fSmartAligner(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isSemModeloImpresso){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idSmartAligner}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idSmartAligner}`)
    }
  }

  fInvisalign(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isInvisalign){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idInvisalign}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idInvisalign}`)
    }
  }

  fOrthoAligner(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isOrthoAligner){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idOrthoAligner}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idOrthoAligner}`)
    }
  }

  fKika(){
    if(this.escaneamentoIntraoralService.escaneamentointraoral.isKika){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idKika}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.escaneamentoIntraoralService.escaneamentointraoral.idKika}`)
    }
  }

}
