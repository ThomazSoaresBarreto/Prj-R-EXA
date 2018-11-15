import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations'
import { Router } from '@angular/router';

import { ServicosService } from '../servicos/servicos.service';
import {Servico} from "../servicos/servico/servico.model";

import { TomografiaService } from './tomografia/tomografia.service'
import { RadiologiaService } from './radiologia/radiologia.service'
import { DocOrtoService } from './doc-ortodonticas/doc-ortodonticas.service'
import { EscaneamentoIntraoralService } from './escaneamento-intraoral/escaneamento-intraoral.service'

import { SharedService } from '../shared/shared.service'

import { FormatoEntregaComponent } from './formato-entrega/formato-entrega.component'



@Component({
  selector: 'mt-servico-detail',
  templateUrl: './servico-detail.component.html',
  styleUrls: ['./servico-detail.component.css'],
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

export class ServicoDetailComponent implements OnInit {

  servico: Servico
  menuItemState = 'ready'

  id="tomo"

  constructor(private servicosService: ServicosService,
              private route: ActivatedRoute,
              private tomografiaService: TomografiaService,
              private radiologiaService:RadiologiaService,
              private docOrtoService: DocOrtoService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {

    // ATENÇÃO HABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
    //this.servicosService.servicoById(this.route.snapshot.params['id'])
    //  .subscribe(servico => this.servico = servico)

    // ATENÇÃO RETIRAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
    this.servico =  this.servicosService.fservicoById(this.route.snapshot.params['id'])
  }

  fOrigemServico():string{
    return this.servico.id
  }

  fTituloServico():string{
    return this.servico.name
  }


  fStatusFormatoEntrega(tipo:string):any{
    if(tipo == 'tomo'){
      return this.tomografiaService.formatoEntregaTomografia
    }
    if(tipo == 'radio'){
      return this.radiologiaService.formatoEntregaRadiologia
    }
    if(tipo == 'docs'){
      return this.docOrtoService.formatoEntregaDocumentacoes
    }
    if(tipo == 'escaneamento'){
      return this.escaneamentoIntraoralService.formatoEntregaEscaneamentointraoral
    }
    return []
  }

  fecharPedido(){
    this.router.navigate(['order-ped-exame']);
  }



}
