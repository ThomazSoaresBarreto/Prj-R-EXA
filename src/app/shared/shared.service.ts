import {Injectable} from '@angular/core'

import { NotificationService } from '../shared/messages/notification.service'

import { TomografiaService } from '../servico-detail/tomografia/tomografia.service'
import { EscaneamentoIntraoralService } from '../servico-detail/escaneamento-intraoral/escaneamento-intraoral.service'
import { RadiologiaService } from '../servico-detail/radiologia/radiologia.service'
import { DocOrtoService } from '../servico-detail/doc-ortodonticas/doc-ortodonticas.service'



@Injectable()
export class SharedService {


  constructor(private tomografiaService: TomografiaService,
              private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private radiologiaService: RadiologiaService,
              private docOrtoService: DocOrtoService,
              private notificationService: NotificationService){}

  

  fRequisicaoValida():boolean{
    if(!this.fValidaExisteServicos()){
      return false
    }

    if(this.tomografiaService.fExistExamTomo()){
      if(!this.tomografiaService.fTomografiaReqValida()){
        return false
      }
    }

    if(this.docOrtoService.fExistDocOrtodonticas()){
      if(!this.docOrtoService.fDocOrtoReqValida()){
        return false
      }
    }

    if(this.radiologiaService.fExistRadiologia()){
      if(!this.radiologiaService.fRadiologiaReqValida()){
        return false
      }
    }
    if(this.escaneamentoIntraoralService.fExistEscaneamentointraoral()){
      if(!this.escaneamentoIntraoralService.fEscaneamentointraoralReqValida()){
        return false
      }
    }


    return true
  }

  fLimparequisicao(){
    this.tomografiaService.clearTomografia()
    this.radiologiaService.clearRadiologia()
    this.escaneamentoIntraoralService.clearEscaneamentointraoral()
    this.docOrtoService.clearDocOrto()
    this.notificationService.notify(`Você limpou a lista de serviços da requisição`)
  }

  fValidaExisteServicos():boolean{
    if(this.tomografiaService.fExistExamTomo()){
      return true
    }
    if(this.radiologiaService.fExistRadiologia()){
      return true
    }
    if(this.escaneamentoIntraoralService.fExistEscaneamentointraoral()){
      return true
    }
    if(this.docOrtoService.fExistDocOrtodonticas()){
      return true
    }
    return false
  }


}
