import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormatoEntregaComponent } from  '../../servico-detail/formato-entrega/formato-entrega.component'

declare var $: any;

@Component({
  selector: 'mt-modal-formatoentrega',
  templateUrl: './modal-formatoentrega.component.html',
  styleUrls: ['./modal-formatoentrega.component.css']
})
export class ModalFormatoentregaComponent implements OnInit {


  @Input() origemServico;
  @Input() statusFormatoEntrega;

  @Output() respostaFormatoEntrega = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fConfirmaFormaEntrega(){
    $('#ModalFormaEntrega').modal('hide')
  }

  updateFromChild(respostaFormatoEntrega){
    this.respostaFormatoEntrega = respostaFormatoEntrega
  }
}
