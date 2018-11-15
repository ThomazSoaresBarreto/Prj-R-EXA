import { Component, OnInit } from '@angular/core';

import { ServicosListaReqComponent } from '../../servicos/servicos-lista-req/servicos-lista-req.component'


declare var $: any;

@Component({
  selector: 'mt-modal-exames-requisitados',
  templateUrl: './modal-exames-requisitados.component.html',
  styleUrls: ['./modal-exames-requisitados.component.css']
})
export class ModalExamesRequisitadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Modal(){
    $("#myModal").modal('show');
  }

  fSair(){
    $('#myModal').modal('hide')
  }

}
