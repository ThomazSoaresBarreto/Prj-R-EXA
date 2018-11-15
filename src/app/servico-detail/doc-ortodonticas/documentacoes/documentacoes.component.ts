import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { DocOrtoService } from '../doc-ortodonticas.service'

import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-documentacoes',
  templateUrl: './documentacoes.component.html',
  styleUrls: ['./documentacoes.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ]),
      transition('ready => void', [
        style({opacity: 0, transform: 'translateY(10px)'}),
        animate('400ms 0s ease-out')
      ])
    ])
  ]
})
export class DocumentacoesComponent implements OnInit {

  menuItemState = 'ready'

  constructor(private docOrtoService: DocOrtoService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }



  fClickDocumentacoes(){
    this.docOrtoService.isDocOrtodontica = !this.docOrtoService.isDocOrtodontica
  }


  fHabTracado(){
    this.docOrtoService.isHabTracado = !this.docOrtoService.isHabTracado
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
