import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'

@Component({
  selector: 'mt-documentacaodigital',
  templateUrl: './documentacaodigital.component.html',
  styleUrls: ['./documentacaodigital.component.css']
})
export class DocumentacaoDigitalComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {}


  clickDocumentacaoDigital(){
    this.tomografiaService.isDocumentacaoDigital = !this.tomografiaService.isDocumentacaoDigital
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

}
