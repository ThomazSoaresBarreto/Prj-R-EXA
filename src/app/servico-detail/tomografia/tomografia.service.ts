import { Injectable } from '@angular/core'

import { ImgOdontograma } from './imgodontograma/imgodontograma.model'
import { ProtCirurGuiadaModel } from './prot-cirur-guiada/prot-cirur-guiada.model'
import { ImplanteModel } from './implante/implante.model'
import { PeriodontiaModel } from './Periodontia/periodontia.model'
import { OutrasFinalidadesModel } from './outras-finalidades/outras-finalidades.model'
import { AtmModel } from './atm/atm.model'
import { TcFaceModel } from './tc-face/tc-face.model'
import { DocumentacaoDigitalModel } from './documentacaodigital/documentacaodigital.model'
import { PrototipagemModel } from './prototipagem/prototipagem.model'
import { OrderPedExameServicoModel, ItensServicoModel, SubItensServicoModel, ItensSubItensServicoModel } from '../../order-ped-exame/order-ped-exame.Model'
import { FormatoEntrega } from '../formato-entrega/formatoentrega.model'



@Injectable()

export class TomografiaService {
  constructor(){}

//Funções centrais do servico tomografia

  clearTomografia(){
    this.clearProtCirurGuiada()
    this.clearImplante()
    this.clearPeriodontia()
    this.clearOutrasFinalidades()
    this.clearAtm()
    this.clearTcFace()
    this.clearDocumentacaoDigital()
    this.clearPrototipagem()
    this.clearFormaEntrega()
  }
  fExistExamTomo(): boolean{
    if(this.fExisteProtCirurGuiada()){
      return true
    }
    if(this.fExisteImplante()){
      return true
    }
    if (this.fExistePeriodontia()){
      return true
    }
    if (this.fExisteOutrasFinalidades()){
      return true
    }
    if (this.fExisteATM()){
      return true
    }
    if (this.fExisteTcFace()){
      return true
    }
    if (this.fExisteDocumentacaoDigital()){
      return true
    }
    if (this.fExistePrototipagem()){
      return true
    }
    return false
  }
  fTomografiaReqValida():boolean{
    if(!this.fExisteFormaEntrega()){
      return false
    }
    if(!this.fTomografiaReqValidaprotCirurGuiada()){
      return false
    }
    if(!this.fTomografiaReqValidaImplante()){
      return false
    }
    if(!this.fTomografiaReqValidaPeriodontia()){
      return false
    }
    if(!this.fTomografiaReqValidaOutrasFinalidades()){
      return false
    }
    if(!this.fTomografiaReqValidaAtm()){
      return false
    }
    if(!this.fTomografiaReqValidaTcFace()){
      return false
    }
    if(!this.fTomografiaReqValidaDocumentacaoDigital()){
      return false
    }
    if(!this.fTomografiaReqValidaPrototipagem()){
      return false
    }

    return true
  }
  fCarregaTomografiaReq():any{
    let orderPedExameServico ={
      idServico: '',
      dscServico: '',
      formaEntrega: [],
      itensServico: []
    }
    orderPedExameServico.idServico= 'tomo'
    orderPedExameServico.dscServico= 'Tomografia Computadorizada'
    orderPedExameServico.formaEntrega= this.fRetornaItensFormaEntrega()
    //Protocolo para cirurgia guiada
    if(this.fExisteProtCirurGuiada()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensProtCirurGuiada())
    }
    //Implante
    if(this.fExisteImplante()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensImplante())
    }
    //Periodontia
    if(this.fExistePeriodontia()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensPeriodontia())
    }
    //outrasFinalidades
    if(this.fExisteOutrasFinalidades()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensOutrasFinalidades())
    }
    if(this.fExisteATM()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensATM())
    }
    if(this.fExisteTcFace()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensTcFace())
    }
    if(this.fExisteDocumentacaoDigital()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensDocumentacaoDigital())
    }
    if(this.fExistePrototipagem()){
      orderPedExameServico.itensServico.push(
          this.fRetornaItensPrototipagem())
    }

  //console.log(JSON.stringify(orderPedExameServico))

    return orderPedExameServico
  }

  //Protocolo para cirurgia guiada
  isPrtCirGuiada: boolean = false;
  protCirurGuiada: ProtCirurGuiadaModel = {
    idProtCirGuiada: "Protocolo para cirurgia guiada",
    isProtCirGuiada:false,
    idLaboratorio: "Laboratório(s):",
    idProcedimento: "Procedimento(s):",
    idCompass3d: "- Compass 3D",
    isCompass3d: false,
    idMandibula: "- Mandíbula",
    isMandibula: false,
    idSmartSolution: "- SmartSolution",
    isSmartSolution: false,
    idMaxila: "- Maxila",
    isMaxila: false,
    idCirurgiaGuiadaParcial:"Cirurgia Guiada Parcial:",
    isCirurgiaGuiadaParcial: false,
    idLaudoImpressaoCGP: "- +Laudo e Impressão",
    isLaudoImpressaoCGP: false,
    idTomoDicomCGP: "- Tomografia do paciente (Dicom)",
    isTomoDicomCGP: false,
    idEscaneamentoIntraoralCGP: "- Escaneamento Intraoral",
    isEscaneamentoIntraoralCGP: false,
    idPlanejamentoCGP: "- Planejamento+guia com: ",
    isPlanejamentoCGP: false,
    idPlanejamentoFuroCGP: "",
    isPlanejamentoFuroCGP: false,
    idCirurgiaGuiadaTotal: "Cirurgia Guiada Total:",
    isCirurgiaGuiadaTotal: false,
    idLaudoImpressaoCGT: "- +Laudo e Impressão",
    isLaudoImpressaoCGT: false,
    idTomoDicomCGT: "- Tomografia do paciente (Dicom)",
    isTomoDicomCGT: false,
    idTomoProteseDicomCGT: "- Tomografia da prótese (Dicom)",
    isTomoProteseDicomCGT: false,
    idPlanejamentoCGT: "- Planejamento+guia total com:",
    isPlanejamentoCGT: false,
    idPlanejamentoFuroCGT: "",
    isPlanejamentoFuroCGT: false
  }
  clearProtCirurGuiada(){
    this.protCirurGuiada.isProtCirGuiada= false
    this.protCirurGuiada.isCompass3d= false
    this.protCirurGuiada.isMandibula= false
    this.protCirurGuiada.isSmartSolution= false
    this.protCirurGuiada.isMaxila= false
    this.isPrtCirGuiada = false
    this.clearCirurgiaGuiadaParcial()
    this.clearCirurgiaGuiadaTotal()
    }
  clearCirurgiaGuiadaParcial(){
    this.protCirurGuiada.isCirurgiaGuiadaParcial =  false
    this.protCirurGuiada.isLaudoImpressaoCGP =  false
    this.protCirurGuiada.isTomoDicomCGP=  false
    this.protCirurGuiada.isEscaneamentoIntraoralCGP=  false
    this.protCirurGuiada.isPlanejamentoCGP=  false
    this.protCirurGuiada.isPlanejamentoFuroCGP= false
    this.protCirurGuiada.idPlanejamentoFuroCGP= ''
  }
  clearCirurgiaGuiadaTotal(){
    this.protCirurGuiada.isCirurgiaGuiadaTotal=  false
    this.protCirurGuiada.isLaudoImpressaoCGT=  false
    this.protCirurGuiada.isTomoDicomCGT=  false
    this.protCirurGuiada.isTomoProteseDicomCGT=  false
    this.protCirurGuiada.isPlanejamentoCGT=  false
    this.protCirurGuiada.isPlanejamentoFuroCGT= false
    this.protCirurGuiada.idPlanejamentoFuroCGT= ''
  }
  fValidaLaboratorio(exame:any):boolean{
    if(exame){
      if(this.protCirurGuiada.isCompass3d || this.protCirurGuiada.isSmartSolution){
        return true
      }else{
        return false
      }
    }
    return true
  }
  fValidaExameLaboratorio(laboratorio:any):boolean{
    if(laboratorio){
      if(this.protCirurGuiada.isMandibula || this.protCirurGuiada.isMaxila){
        return true
      }else{
        return false
      }
    }
    return true
  }
  fTomografiaReqValidaprotCirurGuiada():boolean{
    if(!this.fValidaLaboratorio(this.protCirurGuiada.isMaxila) ||
      !this.fValidaLaboratorio(this.protCirurGuiada.isMandibula)){
      return false
    }
    if(!this.fValidaExameLaboratorio(this.protCirurGuiada.isSmartSolution) ||
      !this.fValidaExameLaboratorio(this.protCirurGuiada.idCompass3d) &&
      (this.protCirurGuiada.isSmartSolution || this.protCirurGuiada.isCompass3d)){
      return false
    }
    if(this.protCirurGuiada.isCirurgiaGuiadaParcial){
      if(!this.protCirurGuiada.isPlanejamentoFuroCGP){
        return false
      }
    }
    if(this.protCirurGuiada.isCirurgiaGuiadaTotal){
      if(!this.protCirurGuiada.isPlanejamentoFuroCGT){
        return false
      }
    }
    return true
  }
  fExisteProtCirurGuiada():boolean{
    let verifica =  (JSON.stringify(this.protCirurGuiada)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  fRetornaItensProtCirurGuiada():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idProtCirGuiada'
    ItensServico.dscItemServico = this.protCirurGuiada.idProtCirGuiada
    //laboratorio
    if(this.protCirurGuiada.isSmartSolution || this.protCirurGuiada.isCompass3d){
      ItensServico.subItensServico.push(
            this.fRetornaLaboratorios('idLaboratorio',this.protCirurGuiada.idLaboratorio))
    }
    //Procedimento
    if(this.protCirurGuiada.isMandibula || this.protCirurGuiada.isMaxila){
      ItensServico.subItensServico.push(
            this.fRetornaProcedimentos('idProcedimento',this.protCirurGuiada.idProcedimento))
    }
    //Cirurgia guiada parcial
    if(this.protCirurGuiada.isCirurgiaGuiadaParcial){
      ItensServico.subItensServico.push(
          this.fRetornaCirurgiaGuiadaParcial('idCirurgiaGuiadaParcial',this.protCirurGuiada.idCirurgiaGuiadaParcial))
    }
    //Cirurgia guiada total
    if(this.protCirurGuiada.isCirurgiaGuiadaTotal){
      ItensServico.subItensServico.push(
          this.fRetornaCirurgiaGuiadaTotal('idCirurgiaGuiadaTotal',this.protCirurGuiada.idCirurgiaGuiadaTotal))
    }
    return ItensServico
  }
  fRetornaLaboratorios(id: string, dsc1:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(this.protCirurGuiada.isCompass3d){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idCompass3d',this.protCirurGuiada.idCompass3d,''))
    }
    if(this.protCirurGuiada.isSmartSolution){
      subItensServico.itensSubItensServico.push(
      this.fRetornaitensSubItensServico('idSmartSolution',this.protCirurGuiada.idSmartSolution,''))
    }
    return subItensServico
  }
  fRetornaProcedimentos(id: string, dsc1:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(this.protCirurGuiada.isMandibula){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idMandibula',this.protCirurGuiada.idMandibula,''))
    }
    if(this.protCirurGuiada.isMaxila){
      subItensServico.itensSubItensServico.push(
      this.fRetornaitensSubItensServico('idMaxila',this.protCirurGuiada.idMaxila,''))
    }
    return subItensServico
  }
  fRetornaCirurgiaGuiadaParcial(id: string, dsc1:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(this.protCirurGuiada.isLaudoImpressaoCGP){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idLaudoImpressaoCGP',this.protCirurGuiada.idLaudoImpressaoCGP,''))
    }
    if(this.protCirurGuiada.isTomoDicomCGP){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idTomoDicomCGP',this.protCirurGuiada.idTomoDicomCGP,''))
    }
    if(this.protCirurGuiada.isEscaneamentoIntraoralCGP){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idEscaneamentoIntraoralCGP',this.protCirurGuiada.idEscaneamentoIntraoralCGP,''))
    }
    if(this.protCirurGuiada.isPlanejamentoFuroCGP){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idPlanejamentoFuroCGP',
          this.protCirurGuiada.idPlanejamentoCGP,
          this.protCirurGuiada.idPlanejamentoFuroCGP))
    }
    return subItensServico
  }
  fRetornaCirurgiaGuiadaTotal(id: string, dsc1:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(this.protCirurGuiada.isLaudoImpressaoCGT){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idLaudoImpressaoCGT',this.protCirurGuiada.idLaudoImpressaoCGT,''))
    }
    if(this.protCirurGuiada.isTomoDicomCGT){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idTomoDicomCGT',this.protCirurGuiada.idTomoDicomCGT,''))
    }
    if(this.protCirurGuiada.isTomoProteseDicomCGT){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idTomoProteseDicomCGT',this.protCirurGuiada.idTomoProteseDicomCGT,''))
    }
    if(this.protCirurGuiada.isPlanejamentoFuroCGT){
          subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idPlanejamentoFuroCGT',
          this.protCirurGuiada.idPlanejamentoCGT,
          this.protCirurGuiada.idPlanejamentoFuroCGT))
    }
    return subItensServico
  }


  //Implante
  isApresentaOdontogramaImplante: boolean = true
  isImplante: boolean = false;
  implanteOdontograma : any[] = []
  implante: ImplanteModel = {
    idImplante: "Implante",
    isImplante: false,
    idComGuia: "Com guia.",
    isComGuia: false,
    idSemGuia: "Sem guia.",
    isSemGuia: false,
    idTecidoMole: "- Tecido mole (uso de afastador)",
    isTecidoMole: false,
    idMaxilaCompleta: "- Maxila completa",
    isMaxilaCompleta: false,
    idMandibulaCompleta: "- Mandíbula completa",
    isMandibulaCompleta: false
  }
  clearImplante(){
    this.implante.isImplante= false
    this.clearImplateComGuia()
    this.clearImplateSemGuia()
    this.implanteOdontograma = []
    this.isImplante=false
    this.isApresentaOdontogramaImplante = false
  }
  clearImplateComGuia(){
    this.implante.isComGuia = false
    this.clearItensImplante()
  }
  clearImplateSemGuia(){
    this.implante.isSemGuia = false
    this.clearItensImplante()
  }
  clearItensImplante(){
    this.implante.isTecidoMole = false
    this.implante.isMaxilaCompleta = false
    this.implante.isMandibulaCompleta = false
  }
  fExisteImplante():boolean{
    let verifica =  (JSON.stringify(this.implante)).indexOf('true')
    if(verifica != -1 ){
        return true
    }
    return false
  }
  fTomografiaReqValidaImplante():boolean{
    if(this.fExisteImplante()){
      if(this.implanteOdontograma.length == 0){
        return false
      }
    }
    return true
  }
  fRetornaItensImplante():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idImplante'
    ItensServico.dscItemServico = this.implante.idImplante
    //Odontograma
    ItensServico.odontograma = this.implanteOdontograma
    //Com guia
    if(this.implante.isComGuia){
      ItensServico.subItensServico.push(
          this.fRetornaImplanteGuia('idComGuia',this.implante.idComGuia))
    }
    if(this.implante.isSemGuia){
      ItensServico.subItensServico.push(
          this.fRetornaImplanteGuia('idSemGuia',this.implante.idSemGuia))
    }

    return ItensServico
  }
  fRetornaImplanteGuia(id: string, dsc1:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(this.implante.isTecidoMole){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idTecidoMole',this.implante.idTecidoMole,''))
    }
    if(this.implante.isMaxilaCompleta){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idMaxilaCompleta',this.implante.idMaxilaCompleta,''))
    }
    if(this.implante.isMandibulaCompleta){
      subItensServico.itensSubItensServico.push(
          this.fRetornaitensSubItensServico('idMandibulaCompleta',this.implante.idMandibulaCompleta,''))
    }
    return subItensServico
  }


  //periodontia
  isOutrasPeriodontia : boolean=false
  periodontiaOdontograma : any[] = []
  isapresentaOdontograma: boolean = false
  isPeriodontia: boolean = false;
  periodontia: PeriodontiaModel = {
    idPeriodontia: "Periodontia",
    isPeriodontia: false,
    idSorrisoGengival: "Sorriso gengival",
    isSorrisoGengival: false,
    idRecobrimentoRadicular:"Recobrimento radicular",
    isRecobrimentoRadicular: false,
    idOutras: "Outras: ",
    isOutras:false,
    dscOutras: ""
  }
  clearPeriodontia(){
      this.periodontia.isPeriodontia= false
      this.periodontia.isSorrisoGengival= false
      this.periodontia.isRecobrimentoRadicular= false
      this.periodontia.isOutras= false
      this.periodontia.dscOutras= ""
      this.isOutrasPeriodontia=false
      this.periodontiaOdontograma = []
      this.isapresentaOdontograma = false
      this.isPeriodontia = false
    }
  fExistePeriodontia():boolean{
      let verifica =  (JSON.stringify(this.periodontia)).indexOf('true')
      if(verifica != -1){
          return true
      }
      return false
    }
  fTomografiaReqValidaPeriodontia():boolean{
    if(this.fExistePeriodontia()){
      if(this.periodontiaOdontograma.length == 0){
        return false
      }
    }
    return true
  }
  fRetornaItensPeriodontia():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idPeriodontia'
    ItensServico.dscItemServico = this.periodontia.idPeriodontia
    //Odontograma
    ItensServico.odontograma = this.periodontiaOdontograma
    //Com guia
    if(this.periodontia.isSorrisoGengival){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idSorrisoGengival',this.periodontia.idSorrisoGengival))
    }
    if(this.periodontia.isRecobrimentoRadicular){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idRecobrimentoRadicular',this.periodontia.idRecobrimentoRadicular))
    }
    if(this.periodontia.isOutras){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idOutras',this.periodontia.idOutras,
              this.periodontia.dscOutras))
    }

    return ItensServico
  }


  //outrasFinalidades
  outrasFinalidadesOdontograma : any[] = []
  isApresentaOdontogramaOutrasFinalidades: boolean = false
  isOutrasFinalidades : boolean=false
  isOutrasFinalidadesMenu : boolean=false
  outrasFinalidades: OutrasFinalidadesModel = {
    idOutrasFinalidades: "Outras finalidades",
    isOutrasFinalidades: false,
    idPesqFratPerf: "Pesquisa de fratura e/ou perfuração",
    isPesqFratPerf: false,
    idDenteIncluso: "Dente incluso",
    isDenteIncluso: false,
    idPatologiaLesao: "Patologia (lesão)",
    isPatologiaLesao: false,
    idOutras: "Outras: ",
    isOutras:false,
    dscOutras: ""
  }
  clearOutrasFinalidades(){
      this.outrasFinalidades.isOutrasFinalidades= false
      this.outrasFinalidades.isPesqFratPerf= false
      this.outrasFinalidades.isDenteIncluso= false
      this.outrasFinalidades.isPatologiaLesao= false
      this.outrasFinalidades.isOutras= false
      this.outrasFinalidades.dscOutras= ""
      this.isOutrasFinalidades=false
      this.isOutrasFinalidadesMenu=false
      this.outrasFinalidadesOdontograma = []
      this.isApresentaOdontogramaOutrasFinalidades = false
  }
  fExisteOutrasFinalidades():boolean{
    let verifica =  (JSON.stringify(this.outrasFinalidades)).indexOf('true')
    if(verifica != -1 ){
        return true
    }
    return false
  }
  fTomografiaReqValidaOutrasFinalidades():boolean{
    if(this.fExisteOutrasFinalidades()){
      if(this.outrasFinalidadesOdontograma.length == 0){
        return false
      }
    }
    return true
  }
  fRetornaItensOutrasFinalidades():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idOutrasFinalidades'
    ItensServico.dscItemServico = this.outrasFinalidades.idOutrasFinalidades
    //Odontograma
    ItensServico.odontograma = this.outrasFinalidadesOdontograma

    if(this.outrasFinalidades.isPesqFratPerf){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idPesqFratPerf',
          this.outrasFinalidades.idPesqFratPerf))
    }
    if(this.outrasFinalidades.isDenteIncluso){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idDenteIncluso',
          this.outrasFinalidades.idDenteIncluso))
    }
    if(this.outrasFinalidades.isPatologiaLesao){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idPatologiaLesao',
          this.outrasFinalidades.idPatologiaLesao))
    }

    if(this.outrasFinalidades.isOutras){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idOutras',
          this.outrasFinalidades.idOutras,
          this.outrasFinalidades.dscOutras))
    }

    return ItensServico
  }

  //Atm
  isAtm:boolean=false
  atm: AtmModel = {
    idAtm: "ATM",
    isAtm: false,
    idAtmBocaFechada: "ATM boca fechada",
    isAtmBocaFechada: false,
    idAtmBocaAberta: "ATM boca aberta",
    isAtmBocaAberta: false,
    idAtmRepouso: "ATM repouso",
    isAtmRepouso: false
  }
  clearAtm(){
    this.isAtm=false
    this.atm.isAtm=false
    this.atm.isAtmBocaFechada=false
    this.atm.isAtmBocaAberta=false
    this.atm.isAtmRepouso=false
  }
  fExisteATM():boolean{
    let verifica =  (JSON.stringify(this.atm)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  fTomografiaReqValidaAtm():boolean{
    return true
  }
  fRetornaItensATM():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idAtm'
    ItensServico.dscItemServico = this.atm.idAtm

    if(this.atm.isAtmBocaFechada){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idAtmBocaFechada',
          this.atm.idAtmBocaFechada))
    }
    if(this.atm.isAtmBocaAberta){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idAtmBocaAberta',
          this.atm.idAtmBocaAberta))
    }
    if(this.atm.isAtmRepouso){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idAtmRepouso',
          this.atm.idAtmRepouso))
    }
    return ItensServico
  }

  //Tomografia de face - FOV 22cm
  isTcFace:boolean=false;
  tcFace: TcFaceModel = {
    idTcFace: "Tomografia de face - FOV 22cm",
    isTcFace: false,
    idDicomSingleFile: "Dicom Single file",
    isDicomSingleFile: false,
    idDicomMultiFile: "Dicom Multi file",
    isDicomMultiFile: false,
    idPlanejamentoOrtoCir: "Planejamento Orto-cirúrgico",
    isPlanejamentoOrtoCir: false
  }
  clearTcFace(){
    this.isTcFace= false
    this.tcFace.isTcFace= false
    this.tcFace.isDicomSingleFile= false
    this.tcFace.isDicomMultiFile= false
    this.tcFace.isPlanejamentoOrtoCir= false
  }
  fExisteTcFace():boolean{
    let verifica =  (JSON.stringify(this.tcFace)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  fTomografiaReqValidaTcFace():boolean{
    return true
  }
  fRetornaItensTcFace():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idTcFace'
    ItensServico.dscItemServico = this.tcFace.idTcFace

    if(this.tcFace.isDicomSingleFile){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idDicomSingleFile',
          this.tcFace.idDicomSingleFile))
    }
    if(this.tcFace.isDicomMultiFile){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idDicomMultiFile',
          this.tcFace.idDicomMultiFile))
    }
    if(this.tcFace.isPlanejamentoOrtoCir){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idPlanejamentoOrtoCir',
          this.tcFace.idPlanejamentoOrtoCir))
    }
    return ItensServico
  }

  //Documentação digital
  isDocumentacaoDigital: boolean = false;
  documentacaoDigital: DocumentacaoDigitalModel = {
    idDocumentacaoDigital: "Documentação digital",
    isDocumentacaoDigital: false,
    idTcFaceProtRITE: "Tomografia de face (Dicom) + Protocolo RITE",
    isTcFaceProtRITE: false,
    id8Fotos: "8 fotos",
    is8Fotos: false,
    idEscaneamentoIntraoral: "Escaneamento intraoral",
    isEscaneamentoIntraoral: false,
    idModelo3DImpresso: "Modelo 3D impresso",
    isModelo3DImpresso: false,
    idPeriapicalCompBiteWings: "Periapical completo com bite-wings",
    isPeriapicalCompBiteWings: false
  }
  clearDocumentacaoDigital(){
      this.documentacaoDigital.isDocumentacaoDigital= false
      this.documentacaoDigital.isTcFaceProtRITE= false
      this.documentacaoDigital.is8Fotos= false
      this.documentacaoDigital.isEscaneamentoIntraoral= false
      this.documentacaoDigital.isModelo3DImpresso= false
      this.documentacaoDigital.isPeriapicalCompBiteWings= false
      this.isDocumentacaoDigital = false
  }
  fExisteDocumentacaoDigital():boolean{
    let verifica =  (JSON.stringify(this.documentacaoDigital)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  fTomografiaReqValidaDocumentacaoDigital():boolean{
    return true
  }
  fRetornaItensDocumentacaoDigital():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idDocumentacaoDigital'
    ItensServico.dscItemServico = this.documentacaoDigital.idDocumentacaoDigital

    if(this.documentacaoDigital.isTcFaceProtRITE){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idTcFaceProtRITE',
          this.documentacaoDigital.idTcFaceProtRITE))
    }
    if(this.documentacaoDigital.is8Fotos){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('id8Fotos',
          this.documentacaoDigital.id8Fotos))
    }
    if(this.documentacaoDigital.isEscaneamentoIntraoral){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idEscaneamentoIntraoral',
          this.documentacaoDigital.idEscaneamentoIntraoral))
    }
    if(this.documentacaoDigital.isModelo3DImpresso){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idModelo3DImpresso',
          this.documentacaoDigital.idModelo3DImpresso))
    }
    if(this.documentacaoDigital.isPeriapicalCompBiteWings){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idPeriapicalCompBiteWings',
          this.documentacaoDigital.idPeriapicalCompBiteWings))
    }

    return ItensServico
  }

  isPrototipagem:boolean=false;
  prototipagem: PrototipagemModel = {
    idPrototipagem: "Prototipagem",
    isPrototipagem: false,
    idBioparts: "Bioparts",
    isBioparts: false,
    idDentalDirect: "Dental Direct",
    isDentalDirect: false,
    idCampoPrototipagem: '',
    isCampoPrototipagem: false
  }
  clearPrototipagem(){
    this.prototipagem.isPrototipagem = false
    this.prototipagem.isBioparts= false
    this.prototipagem.isDentalDirect= false
    this.prototipagem.idCampoPrototipagem= ''
    this.prototipagem.isCampoPrototipagem= false
    this.isPrototipagem = false
  }
  fExistePrototipagem():boolean{
    let verifica =  (JSON.stringify(this.prototipagem)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  fTomografiaReqValidaPrototipagem():boolean{
    return true
  }
  fRetornaItensPrototipagem():any{
    let ItensServico = {
      idItemServico: '',
      dscItemServico: '',
      odontograma: [],
      subItensServico: []
    }
    ItensServico.idItemServico = 'idPrototipagem'
    ItensServico.dscItemServico = this.prototipagem.idPrototipagem

    if(this.prototipagem.isBioparts){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idBioparts',
          this.prototipagem.idBioparts))
    }
    if(this.prototipagem.isDentalDirect){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idDentalDirect',
          this.prototipagem.idDentalDirect))
    }
    if(this.prototipagem.isCampoPrototipagem){
      ItensServico.subItensServico.push(
          this.fRetornaSubItens('idCampoPrototipagem',
          this.prototipagem.idCampoPrototipagem))
    }

    return ItensServico
  }

  formatoEntregaTomografia : FormatoEntrega = {
    isEmail:false,
    isShowEmail: true,
    dscEmail: 'E-mail',
    isCD: false,
    isShowCD: true,
    dscCD:'CD',
    isSemLaudo: false,
    isShowSemLaudo: true,
    dscSemLaudo: 'Sem Laudo',
    isImpresso: false,
    isShowImpresso: true,
    dscImpresso: 'Impresso',
    isCortesPdf: false,
    isShowCortesPdf: true,
    dscCortesPdf: 'Cortes em PDF',
    isDicom: false,
    isShowDicom: true,
    dscDicom: 'Dicom',
    isDentalSlice: false,
    isShowDentalSlice: true,
    dscDentalSlice: 'Dental slice',
    isICATVision: false,
    isShowICATVision: true,
    dscICATVision:'i-CAT Vision'
  }
  clearFormaEntrega(){
    this.formatoEntregaTomografia.isEmail = false
    this.formatoEntregaTomografia.isCD = false
    this.formatoEntregaTomografia.isSemLaudo = false
    this.formatoEntregaTomografia.isImpresso = false
    this.formatoEntregaTomografia.isCortesPdf = false
    this.formatoEntregaTomografia.isDicom = false
    this.formatoEntregaTomografia.isDentalSlice = false
    this.formatoEntregaTomografia.isICATVision = false
  }
  fExisteFormaEntrega():boolean{
    if(this.formatoEntregaTomografia.isEmail){
      return true
    }
    if(this.formatoEntregaTomografia.isCD){
      return true
    }
    if(this.formatoEntregaTomografia.isSemLaudo){
      return true
    }
    if(this.formatoEntregaTomografia.isImpresso){
      return true
    }
    if(this.formatoEntregaTomografia.isCortesPdf){
      return true
    }
    if(this.formatoEntregaTomografia.isDicom){
      return true
    }
    if(this.formatoEntregaTomografia.isDentalSlice){
      return true
    }
    if(this.formatoEntregaTomografia.isICATVision){
      return true
    }
    return false
  }
  fRetornaListaFormaEntrega():any{
    let lista: string[]=[]
    let idFormatoEntrega:string=''
    if(this.formatoEntregaTomografia.isEmail){
      lista.push('Email')
    }
    if(this.formatoEntregaTomografia.isCD){
      lista.push('CD')
    }
    if(this.formatoEntregaTomografia.isSemLaudo){
      lista.push('Sem Laudo')
    }
    if(this.formatoEntregaTomografia.isImpresso){
      lista.push('Impresso')
    }
    if(this.formatoEntregaTomografia.isCortesPdf){
      lista.push('Cortes em PDF')
    }
    if(this.formatoEntregaTomografia.isDicom){
      lista.push('Dicom')
    }
    if(this.formatoEntregaTomografia.isDentalSlice){
      lista.push('Dental slice')
    }
    if(this.formatoEntregaTomografia.isICATVision){
      lista.push('i-CAT Vision')
    }
    if(lista.length > 0){
      for(var i = 0; i < lista.length; i++){
        if(i==0){
          idFormatoEntrega = lista[i]
        }else{
          idFormatoEntrega = idFormatoEntrega +', '+ lista[i]
        }
      }
    }
    return idFormatoEntrega
  }
  fRetornaItensFormaEntrega():any[]{
    let lista: any[]=[]
    if(this.formatoEntregaTomografia.isEmail){
      lista.push(this.fCarregaItemFormaEntrega('isEmail',
                  this.formatoEntregaTomografia.dscEmail))
    }
    if(this.formatoEntregaTomografia.isCD){
      lista.push(this.fCarregaItemFormaEntrega('isCD',
                  this.formatoEntregaTomografia.dscCD))
    }
    if(this.formatoEntregaTomografia.isSemLaudo){
      lista.push(this.fCarregaItemFormaEntrega('isSemLaudo',
                  this.formatoEntregaTomografia.dscSemLaudo))
    }
    if(this.formatoEntregaTomografia.isImpresso){
      lista.push(this.fCarregaItemFormaEntrega('isImpresso',
                  this.formatoEntregaTomografia.dscImpresso))
    }
    if(this.formatoEntregaTomografia.isCortesPdf){
      lista.push(this.fCarregaItemFormaEntrega('isCortesPdf',
                  this.formatoEntregaTomografia.dscCortesPdf))
    }
    if(this.formatoEntregaTomografia.isDicom){
      lista.push(this.fCarregaItemFormaEntrega('isDicom',
                  this.formatoEntregaTomografia.dscDicom))
    }
    if(this.formatoEntregaTomografia.isDentalSlice){
      lista.push(this.fCarregaItemFormaEntrega('isDentalSlice',
                  this.formatoEntregaTomografia.dscDentalSlice))
    }
    if(this.formatoEntregaTomografia.isICATVision){
      lista.push(this.fCarregaItemFormaEntrega('isICATVision',
                  this.formatoEntregaTomografia.dscICATVision))
    }
    return lista
  }
  fCarregaItemFormaEntrega(id:string, dsc: string):any{
    var FormaEntrega = {
      id:'',
      dsc:''
    }
    FormaEntrega.id = id
    FormaEntrega.dsc = dsc
    return FormaEntrega
  }


  /*FUNÇÕES GENERICAS */
  fRetornaitensSubItensServico(id: string, dsc1:string, dsc2:string):any{
    let itensSubItensServico = {
      id: '',
      dsc: '',
      dscOpcao: ''
    }
    itensSubItensServico.id = id
    itensSubItensServico.dsc= dsc1
    itensSubItensServico.dscOpcao= dsc2
    return itensSubItensServico
  }
  fRetornaSubItens(id: string, dsc1:string, dsc3?:string):any{
    let subItensServico = {
      idSubItemServico: '',
      dscSubItemServico: '',
      itensSubItensServico: []
    }
    subItensServico.idSubItemServico = id
    subItensServico.dscSubItemServico= dsc1
    if(dsc3){
      subItensServico.dscSubItemServico= subItensServico.dscSubItemServico + dsc3
    }
    return subItensServico
  }

}
