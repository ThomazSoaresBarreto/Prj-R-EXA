import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'

@Component({
  selector: 'mt-tc-face',
  templateUrl: './tc-face.component.html',
  styleUrls: ['./tc-face.component.css']
})
export class TcFaceComponent implements OnInit {

  constructor(private tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {}


  clickTcFace(){
  this.tomografiaService.isTcFace = !this.tomografiaService.isTcFace
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
