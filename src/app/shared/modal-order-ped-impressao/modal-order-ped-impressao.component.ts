import { Component, OnInit } from '@angular/core';

import { OrderPedExameService } from '../../order-ped-exame/order-ped-exame.service'



declare var $: any;

@Component({
  selector: 'mt-modal-order-ped-impressao',
  templateUrl: './modal-order-ped-impressao.component.html',
  styleUrls: ['./modal-order-ped-impressao.component.css']
})
export class ModalOrderPedImpressaoComponent implements OnInit {

  constructor(private orderPedExameService: OrderPedExameService) { }

  ngOnInit() {
  }

  printToCart2(printSectionId: string){
        let popupWinindow
        let innerContents = document.getElementById(printSectionId).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><title>Clínica Data X - Impressão </title><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        console.log('mprimiu')
        popupWinindow.document.close();
  }

  printToCart(printSectionId: string){
console.log('entrou')
    //var restorepage = document.body.innerHTML;
    //var printcontent = document.getElementById(printSectionId).innerHTML
    //$("#ModalPedImpressao").modal('hide');
    //document.body.innerHTML = printcontent
    window.print()
    //document.body.innerHTML = restorepage
    //console.log('restorepage')


  }


}
