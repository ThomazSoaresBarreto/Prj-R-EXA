import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {trigger, state, style, transition, animate} from '@angular/animations'

import { TomografiaService } from '../servico-detail/tomografia/tomografia.service'
import { EscaneamentoIntraoralService } from '../servico-detail/escaneamento-intraoral/escaneamento-intraoral.service'
import { RadiologiaService } from '../servico-detail/radiologia/radiologia.service'
import { DocOrtoService } from '../servico-detail/doc-ortodonticas/doc-ortodonticas.service'

import { ModalExamesRequisitadosComponent } from '../shared/modal-exames-requisitados/modal-exames-requisitados.component'
import { SharedService } from '../shared/shared.service'

declare var $: any;

@Component({
  selector: 'mt-pedido-exame',
  templateUrl: './pedido-exame.component.html',
  styleUrls: ['./pedido-exame.component.css'],
  preserveWhitespaces: true,
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class PedidoExameComponent implements OnInit {

  menuItemState = 'ready'


  constructor(private tomografiaService: TomografiaService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private radiologiaService: RadiologiaService,
              private docOrtoService: DocOrtoService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.servicoSelecionado==''
  }

  fecharPedido(){
    this.router.navigate(['order-ped-exame']);
  }

  Modal(){
      $("#myModal").modal('show');
    }

  limparPedido(){
    this.sharedService.fLimparequisicao()
  }


  ModalFormaEntrega(){
    $("#ModalFormaEntrega").modal('show');
  }

  fOrigemServico():string{
    let servico:string=''
    switch(this.servicoSelecionado){
      case this.servicoSelecionado='tomo':{
        servico = 'TOMOGRAFIA COMPUTADORIZADA'
        break;
      }
      case this.servicoSelecionado='radio':{
        servico = 'RADIOLOGIA DIGITAL'
        break;
      }
      case this.servicoSelecionado='docs':{
        servico = 'DOCUMENTAÇÕES ORTODÔNTICAS'
        break;
      }
      case this.servicoSelecionado='escaneamento':{
        servico = 'ESCANEAMENTO INTRAORAL'
        break;
      }
    }
    return servico
  }


  fStatusFormatoEntrega():any{
    if(this.servicoSelecionado=='tomo'){
      return this.tomografiaService.formatoEntregaTomografia
    }
    if(this.servicoSelecionado=='radio'){
      return this.radiologiaService.formatoEntregaRadiologia
    }
    if(this.servicoSelecionado=='docs'){
      return this.docOrtoService.formatoEntregaDocumentacoes
    }
    if(this.servicoSelecionado == 'escaneamento'){
      return this.escaneamentoIntraoralService.formatoEntregaEscaneamentointraoral
    }

  }


  servicoSelecionado:string=''

  fSelectformatoEntrega(valor:string){
    this.ModalFormaEntrega()
    this.servicoSelecionado = valor
  }

}
