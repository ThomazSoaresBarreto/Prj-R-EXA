import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {trigger, state, style, transition, animate} from '@angular/animations'

import { TomografiaService } from '../../servico-detail/tomografia/tomografia.service'
import { EscaneamentoIntraoralService } from '../../servico-detail/escaneamento-intraoral/escaneamento-intraoral.service'
import { RadiologiaService } from '../../servico-detail/radiologia/radiologia.service'
import { DocOrtoService } from '../../servico-detail/doc-ortodonticas/doc-ortodonticas.service'
import { SharedService } from '../../shared/shared.service'

@Component({
  selector: 'mt-servicos-lista-req',
  templateUrl: './servicos-lista-req.component.html',
  styleUrls: ['./servicos-lista-req.component.css'],
  preserveWhitespaces: true,
  animations: [
    trigger('servicoAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('1000ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ServicosListaReqComponent implements OnInit {

  ServicoState ='ready'

  constructor(private tomografiaService: TomografiaService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private radiologiaService: RadiologiaService,
              private docOrtoService: DocOrtoService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
  }

  clearLista(){
    this.sharedService.fLimparequisicao()
  }

  fecharPedido(){
    this.router.navigate(['order-ped-exame']);
  }


}
