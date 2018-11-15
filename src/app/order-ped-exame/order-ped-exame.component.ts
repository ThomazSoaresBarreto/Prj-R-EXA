import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms'
//import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import {trigger, state, style, transition, animate} from '@angular/animations'

import { TomografiaService } from '../servico-detail/tomografia/tomografia.service'
import { OrderPedExameModel, OrderPedExameServicoModel, ItensServicoModel, SubItensServicoModel } from '../order-ped-exame/order-ped-exame.Model'
import { OrderPedExameService } from './order-ped-exame.service'
import { SharedService } from '../shared/shared.service'
import {tap} from 'rxjs/operators'

declare var $: any;


@Component({
  selector: 'mt-order-ped-exame',
  templateUrl: './order-ped-exame.component.html',
  styleUrls: ['./order-ped-exame.component.css'],
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
export class OrderPedExameComponent implements OnInit {


  orderPedExamform : FormGroup

  orderId: string

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/


  constructor(private tomografiaService: TomografiaService,
              private orderPedExameService: OrderPedExameService,
              private router: Router,
              private formBuilder: FormBuilder,
              private sharedService: SharedService) { }

  //@ViewChild('orderPedExam') campoForm: ElementRef;
  dataAtual: Date = new Date();

  ngOnInit() {
    this.fAtualizaDataatual()
    this.orderPedExamform =  new FormGroup({
      nomPaciente:  this.formBuilder.control(this.orderPedExameService.orderPedExame.nomPaciente, [Validators.required, Validators.minLength(3)]),
      emailPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.emailPaciente),
      telPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.telPaciente),
      endPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.endPaciente),
      numEndPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.numEndPaciente),
      compEndPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.compEndPaciente),
      nomDentista:  this.formBuilder.control(this.orderPedExameService.orderPedExame.nomDentista),
      CRODentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.CRODentista),
      emailDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.emailDentista),
      telDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.telDentista),
      endDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.endDentista),
      numEndDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.numEndDentista),
      compEndDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.compEndDentista),
      dtPedExame: this.formBuilder.control(this.orderPedExameService.orderPedExame.dtPedExame, [Validators.required]),
    })
    /*this.orderPedExamform =  new FormGroup({
      nomPaciente:  this.formBuilder.control(this.orderPedExameService.orderPedExame.nomPaciente, [Validators.required, Validators.minLength(3)]),
      emailPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.emailPaciente, [Validators.required, Validators.pattern(this.emailPattern)]),
      telPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.telPaciente, [Validators.required, Validators.maxLength(11), Validators.minLength(10)]),
      endPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.endPaciente, [Validators.minLength(5)]),
      numEndPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.numEndPaciente,[Validators.minLength(1)]),
      compEndPaciente: this.formBuilder.control(this.orderPedExameService.orderPedExame.compEndPaciente),
      nomDentista:  this.formBuilder.control(this.orderPedExameService.orderPedExame.nomDentista, [Validators.required, Validators.minLength(5)]),
      CRODentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.CRODentista,[Validators.required, Validators.minLength(3)]),
      emailDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.emailDentista, [Validators.required, Validators.pattern(this.emailPattern)]),
      telDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.telDentista, [Validators.required, Validators.maxLength(15)]),
      endDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.endDentista),
      numEndDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.numEndDentista),
      compEndDentista: this.formBuilder.control(this.orderPedExameService.orderPedExame.compEndDentista),
      dscObservações: this.formBuilder.control(this.orderPedExameService.orderPedExame.dscObservações)
    })*/
  }

  ServicoState ='ready'

  orderPedExame:OrderPedExameModel
  orderPedExameItemModel: OrderPedExameServicoModel[] = []

  fAtualizaOrderPedExame(origem: any){
    //console.log(this.orderPedExamform.get("nomPaciente").value)
    //this.orderPedExamform.patchValue({
    //  nomPaciente: "THOMAZ Barreto"
    //}) this.orderPedExamform.get("nomPaciente").setValue('Thomaz Barreto')
    switch(origem){
      case origem='nomPaciente':{
        this.orderPedExamform.get("nomPaciente").setValue(
          this.fFormataNome(this.orderPedExamform.get("nomPaciente").value))
        this.orderPedExameService.orderPedExame.nomPaciente = this.orderPedExamform.get('nomPaciente').value
        break;
      }
      case origem='emailPaciente':{
        this.orderPedExameService.orderPedExame.emailPaciente = this.orderPedExamform.get('emailPaciente').value
        break;
      }
      case origem='telPaciente':{
        this.orderPedExameService.orderPedExame.telPaciente = this.orderPedExamform.get('telPaciente').value
        break;
      }
      case origem='endPaciente':{
        this.orderPedExameService.orderPedExame.endPaciente = this.orderPedExamform.get('endPaciente').value
        break;
      }
      case origem='numEndPaciente':{
        this.orderPedExameService.orderPedExame.numEndPaciente = this.orderPedExamform.get('numEndPaciente').value
        break;
      }
      case origem='compEndPaciente':{
        this.orderPedExameService.orderPedExame.compEndPaciente = this.orderPedExamform.get('compEndPaciente').value
        break;
      }
      case origem='nomDentista':{
        this.orderPedExamform.get("nomDentista").setValue(
          this.fFormataNome(this.orderPedExamform.get("nomDentista").value))
        this.orderPedExameService.orderPedExame.nomDentista = this.orderPedExamform.get('nomDentista').value
        break;
      }
      case origem='CRODentista':{
        this.orderPedExameService.orderPedExame.CRODentista = this.orderPedExamform.get('CRODentista').value
        break;
      }
      case origem='emailDentista':{
        this.orderPedExameService.orderPedExame.emailDentista = this.orderPedExamform.get('emailDentista').value
        break;
      }
      case origem='telDentista':{
        this.orderPedExameService.orderPedExame.telDentista = this.orderPedExamform.get('telDentista').value
        break;
      }
      case origem='endDentista':{
        this.orderPedExameService.orderPedExame.endDentista = this.orderPedExamform.get('endDentista').value
        break;
      }
      case origem='numEndDentista':{
        this.orderPedExameService.orderPedExame.numEndDentista = this.orderPedExamform.get('numEndDentista').value
        break;
      }
      case origem='compEndDentista':{
        this.orderPedExameService.orderPedExame.compEndDentista = this.orderPedExamform.get('compEndDentista').value
        break;
      }
      case origem='dtPedExame':{
        this.orderPedExameService.orderPedExame.dtPedExame = this.orderPedExamform.get('dtPedExame').value
        console.log(this.orderPedExameService.orderPedExame.dtPedExame)
        break;
      }
    }
  }

  fFormataNome(nome: string): string {
    //const excecao: string[] = [' da ', ' de ', ' do ', ' das ', ' dos ', ' e ']
    //console.log(nome.length)
    //if(nome.length == 1){
    return nome.toUpperCase()
  }

  fRetRequisicao(){
    this.router.navigate(['requisicao-exame']);
  }

  fSelectUnidadePreferencial(valor:string){
    this.orderPedExameService.orderPedExame.unidadeAtendimento = valor
  }

  fCancelarRequisicao(){
    this.orderPedExameService.clearPedExam()
    this.orderPedExamform.reset()
    this.sharedService.fLimparequisicao()
  }

  fValidaPedido(): boolean{
    if(!this.sharedService.fRequisicaoValida()){
      return false
    }
    if(!this.orderPedExamform.valid){
      return false
    }
    return true
  }

  fFinalizePedido(valor:any){
    this.orderPedExameService.fCarregaOrderPedExameItem()
    console.log(this.orderPedExameService.orderPedExame)
    console.log(JSON.stringify(this.orderPedExameService.orderPedExame))

// ATENÇÃO HABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS (INCLUIR PEDIDO)
    //this.orderPedExameService.checkOrderPedidoExame(this.orderPedExameService.orderPedExame)
    //  .pipe(tap((orderId: string) => {
    //    this.orderId = orderId
    //  }))
    //  .subscribe( (orderId: string) => {
    //    this.router.navigate(['/order-summary'])
    //    this.orderPedExameService.clearPedExam()
    //    this.fCancelarRequisicao()
    //  })

// ATENÇÃO DESABILITAR ESTE PROCEDIMENTO AO TER BANCO DE DADOS
    this.router.navigate(['/order-summary'])
    this.orderPedExameService.clearPedExam()
    this.fCancelarRequisicao()



    //this.tomografiaService.fRetTCSel()
    //this.addItem(this.tomografiaService.orderPedExameItemModel)
    //this.addItem(this.tomografiaService.orderPedExameItemModel)
    //this.orderPedExame = {
    //  nomPaciente: "Thomaz Barreto",
    // emailPaciente: "thomazbarreto@gmail.com",
      // telPaciente: "21 9992-82857",
      // endPaciente: "Rua Domingos Ferreira",
      // numEndPaciente: "188",
      // compEndPaciente: "1201",
      // nomDentista: "Roberto Araujo",
      // CRODentista: "CRO1256",
      // emailDentista: "roberto@gmail.com",
      // telDentista: "21 9998-58575",
      // Dentista: "Rua X",
      // numEndDentista: "171",
      // compEndDentista: "casa",
      // Observações: "Paciente necessita com urgencia",
      // orderPedExameItem :  this.orderPedExameItemModel
    // }
  //  this.router.navigate(['/order-summary'])
    //console.log(this.campoForm.)
  }

  addItem(item:any){
    //this.orderPedExameItemModel.push(new OrderPedExameItemModel(item))
  }

  fImpRequisicao(){
    $("#ModalPedImpressao").modal('show');
  }

  fAtualizaDataatual(){
    if(this.orderPedExameService.orderPedExame.dtPedExame== undefined){
      console.log(this.fRetornaDataHoraAtual())
      this.orderPedExameService.orderPedExame.dtPedExame=this.fRetornaDataHoraAtual()
    }
  }

  fRetornaDataHoraAtual():string{
    let dNow = new Date();
    let localdate: any
    if(dNow.getDate().toString().length <2){
      localdate = dNow.getFullYear()+ '-'+ (dNow.getMonth()+1) + '-0'+dNow.getDate();
    }else{
      localdate = dNow.getFullYear()+ '-'+(dNow.getMonth()+1)+ '-'+dNow.getDate();
    }
    return localdate;
  }

  print:boolean = false
  printToCart(printSectionId: string){
    this.print = !this.print
    //console.log('entrou')
    //var restorepage = document.body.innerHTML;
    //var printcontent = document.getElementById(printSectionId).innerHTML
    //document.body.innerHTML = printcontent
    console.log(this.print)
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
