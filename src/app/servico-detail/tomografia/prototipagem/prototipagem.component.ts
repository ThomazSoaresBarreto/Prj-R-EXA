import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'

@Component({
  selector: 'mt-prototipagem',
  templateUrl: './prototipagem.component.html',
  styleUrls: ['./prototipagem.component.css']
})
export class PrototipagemComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {}


  clickPrototipagem(){
    this.tomografiaService.isPrototipagem = !this.tomografiaService.isPrototipagem
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

  fAtualizaCampoPrototipagem(){
    console.log(this.tomografiaService.prototipagem.idCampoPrototipagem.length > 0)
    if(this.tomografiaService.prototipagem.idCampoPrototipagem){
      this.tomografiaService.prototipagem.isCampoPrototipagem = true
    }else{
      this.tomografiaService.prototipagem.isCampoPrototipagem = false
    }
  }

}
