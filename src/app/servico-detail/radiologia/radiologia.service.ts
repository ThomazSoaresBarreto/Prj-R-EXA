import { Injectable } from '@angular/core'



import { RadOdontograma } from './rad-odontograma/rad-odontograma.model'
import { FotosIntraoraisModel } from './fotos-intraorais/fotos-intraorais.model'
import { FotosExtraoraisModel } from './fotos-extraorais/fotos-extraorais.model'
import { RadiografiaExtraoraisModel } from './radiografia-extraorais/radiografia-extraorais.model'
import { ModeloGessoModel } from './modelogesso/modelogesso.model'
import { RadiografiaIntraoraisModel } from './radiografia-intraorais/radiografia-intraorais.model'
import { FormatoEntrega } from '../formato-entrega/formatoentrega.model'

@Injectable()

export class RadiologiaService {
  constructor(){}

  fExistRadiologia(): boolean{
    if(this.fExistFotosIntraorais()){
      return true
    }
    if(this.fExistFotosExtraorais()){
      return true
    }
    if(this.fExistRadiografiaExtraorais()){
      return true
    }
    if(this.fExistModeloGesso()){
      return true
    }
    if(this.fExistRadiografiaIntraorais()){
      return true
    }
    return false
  }

  fRadiologiaReqValida():boolean{
    if(!this.fExisteFormaEntrega()){
      return false
    }

    return true
  }

  isFotosintraorais:boolean=false;
  fotosIntraorais: FotosIntraoraisModel = {
    idFotosIntraorais: "Fotos intraorais",
    isFotosIntraorais: false,
    idEmOclusao: "Em oclusão:",
    isEmOclusao: false,
    idFrontal: "Frontal",
    isFrontal: false,
    idDireita: "Direita",
    isDireita: false,
    idEsquerda: "Esquerda",
    isEsquerda: false,
    idVistaOclusal: "Vista oclusal:",
    isVistaOclusal: false,
    idSuperior: "Superior",
    isSuperior: false,
    idInferior: "Inferior",
    isInferior: false
  }
  clearFotosIntraorais(){
    this.isFotosintraorais=false;
    this.fotosIntraorais.isFotosIntraorais=false;
    this.fotosIntraorais.isEmOclusao=false;
    this.fotosIntraorais.isFrontal=false;
    this.fotosIntraorais.isDireita=false;
    this.fotosIntraorais.isEsquerda=false;
    this.fotosIntraorais.isVistaOclusal=false;
    this.fotosIntraorais.isSuperior=false;
    this.fotosIntraorais.isInferior=false;
  }
  fExistFotosIntraorais():boolean{
    let verifica =  (JSON.stringify(this.fotosIntraorais)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }

  isFotosExtraorais:boolean=false;
  fotosExtraorais: FotosExtraoraisModel = {
    idFotosExtraorais: "Fotos extraorais",
    isFotosExtraorais: false,
    idFrontal: "Frontal",
    isFrontal: false,
    idFrontalSorrindo: "Frontal Sorrindo",
    isFrontalSorrindo: false,
    idPerfilDireito: "Perfil direito",
    isPerfilDireito: false
  }
  clearFotosExtraorais(){
    this.isFotosExtraorais=false;
    this.fotosExtraorais.isFotosExtraorais=false;
    this.fotosExtraorais.isFrontal=false;
    this.fotosExtraorais.isFrontalSorrindo=false;
    this.fotosExtraorais.isPerfilDireito=false;
  }
  fExistFotosExtraorais():boolean{
    let verifica =  (JSON.stringify(this.fotosExtraorais)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }

  isRadiografiaExtraorais:boolean=false;
  radiografiaExtraorais: RadiografiaExtraoraisModel = {
    idRadiografiaExtraorais: "Radiografia extraorais",
    isRadiografiaExtraorais: false,
    idPanoramica: "Panorâmica",
    isPanoramica: false,
    idPA: "PA",
    isPA: false,
    idCefalometricaPerfil: "Cefalométrica de perfil",
    isCefalometricaPerfil: false,
    idMaoPunho: "Mão e punho",
    isMaoPunho: false,
    idTracado: "Traçado:",
    isTracado: false,
    idTipEdge: "Tip Edge",
    isTipEdge: false,
    idTweed: "Tweed",
    isTweed: false,
    idDelmanto: "Delmanto",
    isDelmanto: false,
    idPetrovic: "Petrovic",
    isPetrovic: false,
    idErupcao3Molar: "Erupção de 3º molar",
    isErupcao3Molar: false,
    idRicketts: "Ricketts",
    isRicketts: false,
    idBimler: "Bimler",
    isBimler: false,
    idJarabak: "Jarabak",
    isJarabak: false,
    idIBEO: "I.B.E.O.",
    isIBEO: false,
    idDowns: "Downs",
    isDowns: false,
    idUspUnicamp: "USP/Unicamp",
    isUspUnicamp: false,
    idRickettsFrontal: "Ricketts frontal",
    isRickettsFrontal: false,
    idAdenoides: "Adenóides",
    isAdenoides: false,
    idSchwarz: "Schwarz",
    isSchwarz: false,
    idPadraoProfis: "Padrão Profis",
    isPadraoProfis: false,
    idMacNamara: "MacNamara",
    isMacNamara: false,
    idSteiner: "Steiner",
    isSteiner: false,
    idVJMJ: "VJMJ",
    isVJMJ: false,
    idUSP: "USP",
    isUSP: false
  }
  clearRadiografiaExtraorais(){
    this.isRadiografiaExtraorais=false;
    this.radiografiaExtraorais.isRadiografiaExtraorais=false;
    this.radiografiaExtraorais.isPanoramica=false;
    this.radiografiaExtraorais.isPA=false;
    this.radiografiaExtraorais.isCefalometricaPerfil=false;
    this.radiografiaExtraorais.isMaoPunho=false;
    this.radiografiaExtraorais.isTracado=false;
    this.radiografiaExtraorais.isTipEdge=false;
    this.radiografiaExtraorais.isTweed=false;
    this.radiografiaExtraorais.isDelmanto=false;
    this.radiografiaExtraorais.isPetrovic=false;
    this.radiografiaExtraorais.isErupcao3Molar=false;
    this.radiografiaExtraorais.isRicketts=false;
    this.radiografiaExtraorais.isBimler=false;
    this.radiografiaExtraorais.isJarabak=false;
    this.radiografiaExtraorais.isIBEO=false;
    this.radiografiaExtraorais.isDowns=false;
    this.radiografiaExtraorais.isUspUnicamp=false;
    this.radiografiaExtraorais.isRickettsFrontal=false;
    this.radiografiaExtraorais.isAdenoides=false;
    this.radiografiaExtraorais.isSchwarz=false
    this.radiografiaExtraorais.isPadraoProfis=false;
    this.radiografiaExtraorais.isMacNamara=false;
    this.radiografiaExtraorais.isSteiner=false;
    this.radiografiaExtraorais.isVJMJ=false;
    this.radiografiaExtraorais.isUSP=false;
  }
  fExistRadiografiaExtraorais():boolean{
    let verifica =  (JSON.stringify(this.radiografiaExtraorais)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }

  isModeloGesso:boolean=false;
  modeloGesso: ModeloGessoModel = {
    idModeloGesso: "Modelo de gesso",
    isModeloGesso: false,
    idZocalado: "Zocalado",
    isZocalado: false,
    idTrabalho: "Trabalho",
    isTrabalho: false,
    idEscaneamentoModelo: "Escaneamento de modelo",
    isEscaneamentoModelo: false
  }
  clearModeloGesso(){
    this.isModeloGesso=false;
    this.modeloGesso.isModeloGesso=false;
    this.modeloGesso.isZocalado=false;
    this.modeloGesso.isTrabalho=false;
    this.modeloGesso.isEscaneamentoModelo=false;
  }
  fExistModeloGesso():boolean{
    let verifica =  (JSON.stringify(this.modeloGesso)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }


  isRadioIntraorais:boolean=false;
  radiografiaIntraorais: RadiografiaIntraoraisModel = {
    idRadiografiaIntraorais: "Radiografia intraorais",
    isRadiografiaIntraorais: false,
    idPeriapical: "Periapical: ",
    isPeriapical: false,
    idCompleto: "Completo",
    isCompleto: false,
    idOdontograma: "Odontograma",
    isOdontograma: false,
    idOclusal: "Oclusal",
    isOclusal: false,
    idBiteWings: "Bite-wings",
    isBiteWings: false,
    idDireito: "Direito",
    isDireito: false,
    idPreMolares: "Pré-molares",
    isPreMolares: false,
    idEsquerdo: "Esquerdo",
    isEsquerdo: false,
    idMolares: "Molares",
    isMolares: false
  }
  clearRadiografiaIntraorais(){
    this.isRadioIntraorais=false;
    this.radiografiaIntraorais.isRadiografiaIntraorais=false;
    this.radiografiaIntraorais.isPeriapical=false;
    this.radiografiaIntraorais.isCompleto=false;
    this.radiografiaIntraorais.isOdontograma=false;
    this.radiografiaIntraorais.isOclusal=false;
    this.radiografiaIntraorais.isDireito=false;
    this.radiografiaIntraorais.isPreMolares=false;
    this.radiografiaIntraorais.isEsquerdo=false;
    this.radiografiaIntraorais.isMolares=false;
  }
  fExistRadiografiaIntraorais():boolean{
    let verifica =  (JSON.stringify(this.radiografiaIntraorais)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }

  clearRadiologia(){
    this.clearFotosIntraorais()
    this.clearFotosExtraorais()
    this.clearRadiografiaExtraorais()
    this.clearModeloGesso()
    this.clearRadiografiaIntraorais()
    this.clearFormaEntrega()
  }

  formatoEntregaRadiologia : FormatoEntrega = {
    isEmail:false,
    isShowEmail: true,
    dscEmail: 'E-mail',
    isCD: false,
    isShowCD: true,
    dscCD:'CD',
    isSemLaudo: false,
    isShowSemLaudo: false,
    dscSemLaudo: 'Sem Laudo',
    isImpresso: false,
    isShowImpresso: true,
    dscImpresso: 'Impresso',
    isCortesPdf: false,
    isShowCortesPdf: false,
    dscCortesPdf: 'Cortes em PDF',
    isDicom: false,
    isShowDicom: false,
    dscDicom: 'Dicom',
    isDentalSlice: false,
    isShowDentalSlice: false,
    dscDentalSlice: 'Dental slice',
    isICATVision: false,
    isShowICATVision: false,
    dscICATVision:'i-CAT Vision'
  }

  clearFormaEntrega(){
    this.formatoEntregaRadiologia.isEmail = false
    this.formatoEntregaRadiologia.isCD = false
    this.formatoEntregaRadiologia.isSemLaudo = false
    this.formatoEntregaRadiologia.isImpresso = false
    this.formatoEntregaRadiologia.isCortesPdf = false
    this.formatoEntregaRadiologia.isDicom = false
    this.formatoEntregaRadiologia.isDentalSlice = false
    this.formatoEntregaRadiologia.isICATVision = false
  }

  fExisteFormaEntrega():boolean{
    if(this.formatoEntregaRadiologia.isEmail){
      return true
    }
    if(this.formatoEntregaRadiologia.isCD){
      return true
    }
    if(this.formatoEntregaRadiologia.isSemLaudo){
      return true
    }
    if(this.formatoEntregaRadiologia.isImpresso){
      return true
    }
    if(this.formatoEntregaRadiologia.isCortesPdf){
      return true
    }
    if(this.formatoEntregaRadiologia.isDicom){
      return true
    }
    if(this.formatoEntregaRadiologia.isDentalSlice){
      return true
    }
    if(this.formatoEntregaRadiologia.isICATVision){
      return true
    }
    return false
  }

  fRetornaListaFormaEntrega():any{
    let idFormatoEntrega:string=''
    let lista: string[]=[]
    if(this.formatoEntregaRadiologia.isEmail){
      lista.push('Email')
    }
    if(this.formatoEntregaRadiologia.isCD){
      lista.push('CD')
    }
    if(this.formatoEntregaRadiologia.isSemLaudo){
      lista.push('Sem Laudo')
    }
    if(this.formatoEntregaRadiologia.isImpresso){
      lista.push('Impresso')
    }
    if(this.formatoEntregaRadiologia.isCortesPdf){
      lista.push('Cortes em PDF')
    }
    if(this.formatoEntregaRadiologia.isDicom){
      lista.push('Dicom')
    }
    if(this.formatoEntregaRadiologia.isDentalSlice){
      lista.push('Dental slice')
    }
    if(this.formatoEntregaRadiologia.isICATVision){
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



}
