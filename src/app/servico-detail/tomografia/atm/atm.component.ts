import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { TomografiaService } from '../tomografia.service'

@Component({
  selector: 'mt-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {}

  isATM: boolean = true;


  clickATM(){
    this.tomografiaService.isAtm = !this.tomografiaService.isAtm
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
