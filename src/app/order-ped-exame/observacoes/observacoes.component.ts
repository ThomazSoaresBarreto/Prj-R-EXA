import { Component, OnInit } from '@angular/core';
import { OrderPedExameService } from '../order-ped-exame.service'


@Component({
  selector: 'mt-observacoes',
  templateUrl: './observacoes.component.html',
  styleUrls: ['./observacoes.component.css']
})
export class ObservacoesComponent implements OnInit {

  constructor(private orderPedExameService: OrderPedExameService) { }

  ngOnInit() {
  }

  fLimpaObs(){
    this.orderPedExameService.orderPedExame.dscObservacoes = ''
  }

}
