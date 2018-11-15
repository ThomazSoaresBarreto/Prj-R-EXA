import { Component, OnInit } from '@angular/core';
import { OrderPedExameService } from '../order-ped-exame.service'

@Component({
  selector: 'mt-order-ped-impressao',
  templateUrl: './order-ped-impressao.component.html',
  styleUrls: ['./order-ped-impressao.component.css']
})
export class OrderPedImpressaoComponent implements OnInit {

  constructor(private orderPedExameService: OrderPedExameService) { }

  ngOnInit() {
  }

  printToCart(printSectionId: string){

    //console.log('entrou')
    //var restorepage = document.body.innerHTML;
    //var printcontent = document.getElementById(printSectionId).innerHTML
    //document.body.innerHTML = printcontent

    //this.fimprimi()
    //
    //console.log(this.print)
    //document.body.innerHTML = restorepage
  }
  fimprimi(){
    window.print()
    //this.print = !this.print
  }

}
