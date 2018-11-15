import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {MEAT_API} from '../app.api'


import {OrderPedExameModel, OrderPedExameServicoModel, ItensServicoModel,
        SubItensServicoModel, ItensSubItensServicoModel } from './order-ped-exame.model'

import { TomografiaService } from '../servico-detail/tomografia/tomografia.service'


@Injectable()

export class OrderPedExameService {

  constructor(private http: HttpClient,
              private tomografiaService: TomografiaService ){}


  orderPedExame : OrderPedExameModel = {
    nomPaciente: '',
    emailPaciente: '',
    telPaciente: '',
    endPaciente: '',
    numEndPaciente: '',
    compEndPaciente: '',
    nomDentista: '',
    CRODentista: '',
    emailDentista: '',
    telDentista: '',
    endDentista: '',
    numEndDentista: '',
    compEndDentista: '',
    dscObservacoes: '',
    unidadeAtendimento: '',
    orderPedExameServico: [],
    dtPedExame: undefined
  }

  orderPedExameServico:OrderPedExameServicoModel = {
    idServico: '',
    dscServico: '',
    formaEntrega: [],
    itensServico: []
  }

  itensServico: ItensServicoModel = {
    idItemServico: '',
    dscItemServico: '',
    odontograma: [],
    subItensServico: []
  }

  subItensServico: SubItensServicoModel = {
    idSubItemServico: '',
    dscSubItemServico: '',
    itensSubItensServico: []
  }

  itensSubItensServico: ItensSubItensServicoModel = {
    idItensSubItensServico: '',
    dscItensSubItensServico: '',
    dscOpcao: ''
  }

  clearPedExam() {
    this.clearFormularioPedExam()
    this.clearItensServico()
    this.clearOrderPedExameItem()
    this.clearDscSubItensServico()
  }

  clearFormularioPedExam(){
    this.orderPedExame.nomPaciente= ''
    this.orderPedExame.emailPaciente= ''
    this.orderPedExame.telPaciente= ''
    this.orderPedExame.endPaciente= ''
    this.orderPedExame.numEndPaciente= ''
    this.orderPedExame.compEndPaciente= ''
    this.orderPedExame.nomDentista= ''
    this.orderPedExame.CRODentista= ''
    this.orderPedExame.emailDentista= ''
    this.orderPedExame.telDentista= ''
    this.orderPedExame.endDentista= ''
    this.orderPedExame.numEndDentista= ''
    this.orderPedExame.compEndDentista= ''
    this.orderPedExame.dscObservacoes= ''
    this.orderPedExame.unidadeAtendimento= ''
    this.orderPedExame.orderPedExameServico = []
  }
  clearOrderPedExameItem(){
    this.orderPedExameServico.idServico= ''
    this.orderPedExameServico.dscServico= ''
    this.orderPedExameServico.formaEntrega= []
    this.orderPedExameServico.itensServico= []
  }
  clearItensServico(){
    this.itensServico.idItemServico = ''
    this.itensServico.subItensServico = []
  }
  clearSubItensServico(){
    this.subItensServico.idSubItemServico = ''
    this.subItensServico.dscSubItemServico= ''
    this.subItensServico.itensSubItensServico = []
  }
  clearDscSubItensServico(){
    this.itensSubItensServico.idItensSubItensServico = ''
    this.itensSubItensServico.dscItensSubItensServico = ''
    this.itensSubItensServico.dscOpcao = ''
  }

  fCarregaRequisicaoExame(){
    this.orderPedExame.orderPedExameServico = []
    //carrega orderPedExame

  }

  fCarregaOrderPedExameItem(){
    this.clearOrderPedExameItem()
    this.clearItensServico()
    this.clearSubItensServico()
    this.clearDscSubItensServico()
    if(this.tomografiaService.fExistExamTomo()){
      this.orderPedExame.orderPedExameServico.push(this.tomografiaService.fCarregaTomografiaReq())
      //this.fCarregaOrderPedExameTomografia()

      //this.subItensServico.dscSubItensServico.push(this.dscSubItensServico)
  /*     this.itensServico.subItensServico.push(this.subItensServico)
      console.log(this.itensServico)

    this.subItensServico.idSubItemServico = 'idLaboratorio'
      this.dscSubItensServico.id= 'idCompass3d'
      this.dscSubItensServico.dsc= ''
      this.subItensServico.dscSubItensServico.push(this.dscSubItensServico)*/
    }

  }

  fCarregaOrderPedExameTomografia(){
    this.orderPedExameServico.idServico= 'tomo'
    this.orderPedExameServico.dscServico= 'Tomografia Computadorizada'
    this.orderPedExameServico.formaEntrega= this.tomografiaService.fRetornaItensFormaEntrega()
    this.tomografiaService.fCarregaTomografiaReq()



    /*
    this.itensServico.idItemServico="idProtCirGuiada"
    this.subItensServico.idSubItemServico = 'idProcedimento'
    this.subItensServico.itensSubItensServico.push(this.fCarregaSubItensServico('idMandibula' ,''))
    this.subItensServico.itensSubItensServico.push(this.fCarregaSubItensServico('idMaxila' ,''))
    this.itensServico.subItensServico.push(this.subItensServico)

    this.orderPedExameServico.itensServico.push(this.itensServico)
    console.log(this.orderPedExameServico)
    */
  }

  fCarregaSubItensServico(id1:string, dsc1: string):any{
    var SubItensServico = {
      id:'',
      dsc:''
    }
    SubItensServico.id = id1
    SubItensServico.dsc = dsc1
    return SubItensServico
  }

  checkOrderPedidoExame(order: OrderPedExameModel): Observable<string> {
    return this.http.post<OrderPedExameModel>(`${MEAT_API}/pedido-exame`, order)
                    .pipe(map(order => order.idOrderPedExame))
  }


}
