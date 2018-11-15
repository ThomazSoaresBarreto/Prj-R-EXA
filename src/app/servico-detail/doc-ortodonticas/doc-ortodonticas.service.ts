import { Injectable } from '@angular/core'

import { NotificationService } from '../../shared/messages/notification.service';


import { DocumentacoesModel } from './documentacoes/documentacoes.model'
import { FormatoEntrega } from '../formato-entrega/formatoentrega.model'

@Injectable()

export class DocOrtoService {
  constructor(){}

  isDocOrtodontica:boolean=false;
  documentacoes: DocumentacoesModel = {
    idDocumentacoes: "Documentações",
    isDocumentacoes: false,
    idClassificacaoAngle: "Classificação Angle:",
    isClassificacaoAngle: false,
    idClasseI: "*Classe I",
    isClasseI: false,
    idClasseII: "*Classe II",
    isClasseII: false,
    idClasseIII: "*Classe III",
    isClasseIII: false,
    idPanoramica: " - Panorâmica",
    isPanoramica: false,
    idCefalometricaPerfil: " - Cefalométrica de perfil",
    isCefalometricaPerfil: false,
    idTracadoAvulso: " - Traçado avulso",
    isTracadoAvulso: false,
    idKit8Fotos: " - Kit de 8 fotos",
    isKit8Fotos: false,
    idEscanIntraOralModImp: " - Escaneamento intraoral com modelo impresso",
    isEscanIntraOralModImp: false,
    idEscanIntraOralSemModImp: " - Escaneamento intraoral sem modelo impresso",
    isEscanIntraOralSemModImp: false,
    idModGessoZocado: " - Modelo de gesso zocalado",
    isModGessoZocado: false,
    idModGessoTrab: " - Modelo de gesso de trabalho",
    isModGessoTrab: false,
    idPeriapicalIncisivosBiteWing: " - Periapical de incisivos + bite-wing",
    isPeriapicalIncisivosBiteWing: false,
    idPeriapicalCompletoBiteWing: " - Periapical completo com bite-wing",
    isPeriapicalCompletoBiteWing: false,
    idSmartAligner: "Smart Aligner",
    isSmartAligner: false,
    idInvisalign: "Invisalign",
    isInvisalign: false,
    idOrthoAligner: "Ortho Aligner",
    isOrthoAligner: false,
    idKika: "Kika",
    isKika: false,
    idTracado: "Traçado(s): ",
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
  clearDocumentacoes(){
    this.documentacoes.isDocumentacoes=false
    this.documentacoes.isClassificacaoAngle=false
    this.documentacoes.isClasseI=false
    this.documentacoes.isClasseII=false
    this.documentacoes.isClasseIII=false
    this.documentacoes.isPanoramica=false
    this.documentacoes.isCefalometricaPerfil=false
    this.documentacoes.isTracadoAvulso=false
    this.documentacoes.isKit8Fotos=false
    this.documentacoes.isEscanIntraOralModImp=false
    this.documentacoes.isEscanIntraOralSemModImp=false
    this.documentacoes.isModGessoZocado=false
    this.documentacoes.isModGessoTrab=false
    this.documentacoes.isPeriapicalIncisivosBiteWing=false
    this.documentacoes.isPeriapicalCompletoBiteWing=false
    this.documentacoes.isSmartAligner=false
    this.documentacoes.isInvisalign=false
    this.documentacoes.isOrthoAligner=false
    this.documentacoes.isKika=false
    this.documentacoes.isTracado=false
    this.documentacoes.isTipEdge=false
    this.documentacoes.isTweed=false
    this.documentacoes.isDelmanto=false
    this.documentacoes.isPetrovic=false
    this.documentacoes.isErupcao3Molar=false
    this.documentacoes.isRicketts=false
    this.documentacoes.isBimler=false
    this.documentacoes.isJarabak=false
    this.documentacoes.isIBEO=false
    this.documentacoes.isDowns=false
    this.documentacoes.isUspUnicamp=false
    this.documentacoes.isRickettsFrontal=false
    this.documentacoes.isAdenoides=false
    this.documentacoes.isSchwarz=false
    this.documentacoes.isPadraoProfis=false
    this.documentacoes.isMacNamara=false
    this.documentacoes.isSteiner=false
    this.documentacoes.isVJMJ=false
    this.documentacoes.isUSP=false
  }

  fExistDocOrtodonticas(): boolean{
      if(this.fExistDocumentacoes()){
        return true
      }

      return false
    }
  fExistDocumentacoes():boolean{
    let verifica =  (JSON.stringify(this.documentacoes)).indexOf('true')
    if(verifica != -1){
        return true
    }
    return false
  }
  clearDocOrto(){
    this.clearDocumentacoes()
    this.clearFormaEntrega()
  }

  fDocOrtoReqValida():boolean{
    if(!this.fExisteFormaEntrega()){
      return false
    }

    return true
  }

  isHabTracado : boolean = false

  formatoEntregaDocumentacoes : FormatoEntrega = {
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
    isShowImpresso: false,
    dscImpresso: 'Impresso',
    isCortesPdf: false,
    isShowCortesPdf: true,
    dscCortesPdf: 'Cortes em PDF',
    isDicom: false,
    isShowDicom: false,
    dscDicom: 'Dicom',
    isDentalSlice: false,
    isShowDentalSlice: false,
    dscDentalSlice: 'Dental slice',
    isICATVision: false,
    isShowICATVision: true,
    dscICATVision:'i-CAT Vision'
  }

  clearFormaEntrega(){
    this.formatoEntregaDocumentacoes.isEmail = false
    this.formatoEntregaDocumentacoes.isCD = false
    this.formatoEntregaDocumentacoes.isSemLaudo = false
    this.formatoEntregaDocumentacoes.isImpresso = false
    this.formatoEntregaDocumentacoes.isCortesPdf = false
    this.formatoEntregaDocumentacoes.isDicom = false
    this.formatoEntregaDocumentacoes.isDentalSlice = false
    this.formatoEntregaDocumentacoes.isICATVision = false
  }

  fExisteFormaEntrega():boolean{
    if(this.formatoEntregaDocumentacoes.isEmail){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isCD){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isSemLaudo){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isImpresso){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isCortesPdf){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isDicom){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isDentalSlice){
      return true
    }
    if(this.formatoEntregaDocumentacoes.isICATVision){
      return true
    }
    return false
  }

  fRetornaListaFormaEntrega():any{
    let lista: string[]=[]
    let idFormatoEntrega:string=''
    if(this.formatoEntregaDocumentacoes.isEmail){
      lista.push('Email')
    }
    if(this.formatoEntregaDocumentacoes.isCD){
      lista.push('CD')
    }
    if(this.formatoEntregaDocumentacoes.isSemLaudo){
      lista.push('Sem Laudo')
    }
    if(this.formatoEntregaDocumentacoes.isImpresso){
      lista.push('Impresso')
    }
    if(this.formatoEntregaDocumentacoes.isCortesPdf){
      lista.push('Cortes em PDF')
    }
    if(this.formatoEntregaDocumentacoes.isDicom){
      lista.push('Dicom')
    }
    if(this.formatoEntregaDocumentacoes.isDentalSlice){
      lista.push('Dental slice')
    }
    if(this.formatoEntregaDocumentacoes.isICATVision){
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

  fExisteTracado():boolean{
    if(this.documentacoes.isTipEdge){
      return true
    }
    if(this.documentacoes.isTweed){
      return true
    }
    if(this.documentacoes.isDelmanto){
      return true
    }
    if(this.documentacoes.isPetrovic){
      return true
    }
    if(this.documentacoes.isErupcao3Molar){
      return true
    }
    if(this.documentacoes.isRicketts){
      return true
    }
    if(this.documentacoes.isBimler){
      return true
    }
    if(this.documentacoes.isJarabak){
      return true
    }
    if(this.documentacoes.isIBEO){
      return true
    }
    if(this.documentacoes.isDowns){
      return true
    }
    if(this.documentacoes.isUspUnicamp){
      return true
    }
    if(this.documentacoes.isRickettsFrontal){
      return true
    }
    if(this.documentacoes.isAdenoides){
      return true
    }
    if(this.documentacoes.isSchwarz){
      return true
    }
    if(this.documentacoes.isPadraoProfis){
      return true
    }
    if(this.documentacoes.isMacNamara){
      return true
    }
    if(this.documentacoes.isSteiner){
      return true
    }
    if(this.documentacoes.isVJMJ){
      return true
    }
    if(this.documentacoes.isUSP){
      return true
    }
    return false
  }

  fRetornaTracado():any{
    let tracado: string[]=[]
    let tracadoretorno:string=''
    if(this.documentacoes.isTipEdge){
      tracado.push(this.documentacoes.idTipEdge)
    }
    if(this.documentacoes.isTweed){
      tracado.push(this.documentacoes.idTweed)
    }
    if(this.documentacoes.isDelmanto){
      tracado.push(this.documentacoes.idDelmanto)
    }
    if(this.documentacoes.isPetrovic){
      tracado.push(this.documentacoes.idPetrovic)
    }
    if(this.documentacoes.isErupcao3Molar){
      tracado.push(this.documentacoes.idErupcao3Molar)
    }
    if(this.documentacoes.isRicketts){
      tracado.push(this.documentacoes.idRicketts)
    }
    if(this.documentacoes.isBimler){
      tracado.push(this.documentacoes.idBimler)
    }
    if(this.documentacoes.isJarabak){
      tracado.push(this.documentacoes.idJarabak)
    }
    if(this.documentacoes.isIBEO){
      tracado.push(this.documentacoes.idIBEO)
    }
    if(this.documentacoes.isDowns){
      tracado.push(this.documentacoes.idDowns)
    }
    if(this.documentacoes.isUspUnicamp){
      tracado.push(this.documentacoes.idUspUnicamp)
    }
    if(this.documentacoes.isRickettsFrontal){
      tracado.push(this.documentacoes.idRickettsFrontal)
    }
    if(this.documentacoes.isAdenoides){
      tracado.push(this.documentacoes.idAdenoides)
    }
    if(this.documentacoes.isSchwarz){
      tracado.push(this.documentacoes.idSchwarz)
    }
    if(this.documentacoes.isPadraoProfis){
      tracado.push(this.documentacoes.idPadraoProfis)
    }
    if(this.documentacoes.isMacNamara){
      tracado.push(this.documentacoes.idMacNamara)
    }
    if(this.documentacoes.isSteiner){
      tracado.push(this.documentacoes.idSteiner)
    }
    if(this.documentacoes.isVJMJ){
      tracado.push(this.documentacoes.idVJMJ)
    }
    if(this.documentacoes.isUSP){
      tracado.push(this.documentacoes.idUSP)
    }
    if(tracado.length > 0){
      for(var i = 0; i < tracado.length; i++){
        if(i==0){
          tracadoretorno = tracado[i]
        }else{
          tracadoretorno = tracadoretorno +', '+ tracado[i]
        }
      }
    }
    return tracadoretorno
  }

}
