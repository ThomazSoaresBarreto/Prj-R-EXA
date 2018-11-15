import { Injectable } from '@angular/core'

import { EscaneamentointraoralModel } from './escaneamento-intraoral.model'
import { FormatoEntrega } from '../formato-entrega/formatoentrega.model'

@Injectable()

export class EscaneamentoIntraoralService {
  constructor(){
  }

  isEscaneamentoIntraoral:boolean=false;
  escaneamentointraoral: EscaneamentointraoralModel = {
    idEscaneamentointraoral: "Escaneamento intraoral",
    isEscaneamentointraoral: false,
    idModeloImpresso: "Com Modelo impresso",
    isModeloImpresso: false,
    idSemModeloImpresso: "Sem Modelo impresso",
    isSemModeloImpresso: false,
    idSmartAligner: "Smart Aligner",
    isSmartAligner: false,
    idInvisalign: "Invisalign",
    isInvisalign: false,
    idOrthoAligner: "Ortho Aligner",
    isOrthoAligner: false,
    idKika: "Kika",
    isKika: false
  }
  clearEscaneamentointraoral(){
    this.escaneamentointraoral.isEscaneamentointraoral=false
    this.escaneamentointraoral.isModeloImpresso=false
    this.escaneamentointraoral.isSemModeloImpresso=false
    this.escaneamentointraoral.isSmartAligner=false
    this.escaneamentointraoral.isInvisalign=false
    this.escaneamentointraoral.isOrthoAligner=false
    this.escaneamentointraoral.isKika=false
    this.isEscaneamentoIntraoral=false;
    this.clearFormaEntrega()
  }

  fExistEscaneamentointraoral():boolean{
    let verifica =  (JSON.stringify(this.escaneamentointraoral)).indexOf('true')
    if(verifica != -1){
      if(this.escaneamentointraoral.isModeloImpresso || this.escaneamentointraoral.isSemModeloImpresso ){
        return true
      }
      return false
    }
    return false
  }
  fEscaneamentointraoralReqValida():boolean{
    if(!this.fExisteFormaEntrega()){
      return false
    }

    return true
  }

  formatoEntregaEscaneamentointraoral : FormatoEntrega = {
    isEmail:false,
    isShowEmail: false,
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
    isShowDentalSlice: true,
    dscDentalSlice: 'Dental slice',
    isICATVision: false,
    isShowICATVision: false,
    dscICATVision:'i-CAT Vision'
  }

  clearFormaEntrega(){
    this.formatoEntregaEscaneamentointraoral.isEmail = false
    this.formatoEntregaEscaneamentointraoral.isCD = false
    this.formatoEntregaEscaneamentointraoral.isSemLaudo = false
    this.formatoEntregaEscaneamentointraoral.isImpresso = false
    this.formatoEntregaEscaneamentointraoral.isCortesPdf = false
    this.formatoEntregaEscaneamentointraoral.isDicom = false
    this.formatoEntregaEscaneamentointraoral.isDentalSlice = false
    this.formatoEntregaEscaneamentointraoral.isICATVision = false
  }

  fExisteFormaEntrega():boolean{
    if(this.formatoEntregaEscaneamentointraoral.isEmail){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isCD){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isSemLaudo){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isImpresso){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isCortesPdf){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isDicom){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isDentalSlice){
      return true
    }
    if(this.formatoEntregaEscaneamentointraoral.isICATVision){
      return true
    }
    return false
  }

  fRetornaListaFormaEntrega():any{
    let lista: string[]=[]
    let idFormatoEntrega:string=''
    if(this.formatoEntregaEscaneamentointraoral.isEmail){
      lista.push('Email')
    }
    if(this.formatoEntregaEscaneamentointraoral.isCD){
      lista.push('CD')
    }
    if(this.formatoEntregaEscaneamentointraoral.isSemLaudo){
      lista.push('Sem Laudo')
    }
    if(this.formatoEntregaEscaneamentointraoral.isImpresso){
      lista.push('Impresso')
    }
    if(this.formatoEntregaEscaneamentointraoral.isCortesPdf){
      lista.push('Cortes em PDF')
    }
    if(this.formatoEntregaEscaneamentointraoral.isDicom){
      lista.push('Dicom')
    }
    if(this.formatoEntregaEscaneamentointraoral.isDentalSlice){
      lista.push('Dental slice')
    }
    if(this.formatoEntregaEscaneamentointraoral.isICATVision){
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
