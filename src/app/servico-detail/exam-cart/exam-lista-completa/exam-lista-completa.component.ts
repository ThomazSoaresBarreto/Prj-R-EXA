import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../../shared/messages/notification.service'

import { RadiologiaService } from '../../radiologia/radiologia.service';
import { DocOrtoService } from '../../doc-ortodonticas/doc-ortodonticas.service';
import { EscaneamentoIntraoralService } from '../../escaneamento-intraoral/escaneamento-intraoral.service'
import { TomografiaService } from '../../tomografia/tomografia.service'
import { SharedService } from '../../../shared/shared.service'
import { OrderPedExameService } from '../../../order-ped-exame/order-ped-exame.service'

declare var $: any;

@Component({
  selector: 'mt-exam-lista-completa',
  templateUrl: './exam-lista-completa.component.html',
  styleUrls: ['./exam-lista-completa.component.css'],
  preserveWhitespaces: true
})
export class ExamListaCompletaComponent implements OnInit {

  constructor(private docOrtoService: DocOrtoService,
              private radiologiaService: RadiologiaService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private tomografiaService: TomografiaService,
              private router: Router,
              private notificationService: NotificationService,
              private sharedService: SharedService,
              private orderPedExameService: OrderPedExameService) { }

  @Input() recebeOrigem: string;
  @Input() tipoOrigem: string;

  printToCart(printSectionId: string){
        let popupWinindow
        let innerContents = document.getElementById(printSectionId).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
  }

  printToCart2(printSectionId: string){
window.print();
  }

  ngOnInit() {
  }


  limparPedido(){
    this.sharedService.fLimparequisicao()
  }

}
