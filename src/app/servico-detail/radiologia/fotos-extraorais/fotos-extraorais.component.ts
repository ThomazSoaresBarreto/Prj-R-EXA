import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service'
import { RadiologiaService } from '../radiologia.service'

@Component({
  selector: 'mt-fotos-extraorais',
  templateUrl: './fotos-extraorais.component.html',
  styleUrls: ['./fotos-extraorais.component.css']
})
export class FotosExtraoraisComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }


  clickFotosExtraorais(){
    this.radiologiaService.isFotosExtraorais = !this.radiologiaService.isFotosExtraorais
  }

  fFrontal(){
    this.radiologiaService.fotosExtraorais.isFrontal = !this.radiologiaService.fotosExtraorais.isFrontal
    if(this.radiologiaService.fotosExtraorais.isFrontal){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosExtraorais.idFrontal}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosExtraorais.idFrontal}`)
    }
  }

  fFrontalSorrindo(){
    this.radiologiaService.fotosExtraorais.isFrontalSorrindo = !this.radiologiaService.fotosExtraorais.isFrontalSorrindo
    if(this.radiologiaService.fotosExtraorais.isFrontalSorrindo){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosExtraorais.idFrontalSorrindo}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosExtraorais.idFrontalSorrindo}`)
    }
  }

  fPerfilDireito(){
    this.radiologiaService.fotosExtraorais.isPerfilDireito = !this.radiologiaService.fotosExtraorais.isPerfilDireito
    if(this.radiologiaService.fotosExtraorais.isPerfilDireito){
      this.notificationService.notify(`Você adicionou na lista de exames o item ${this.radiologiaService.fotosExtraorais.idPerfilDireito}`)
    }else{
      this.notificationService.notify(`Você retirou da lista de exames o item ${this.radiologiaService.fotosExtraorais.idPerfilDireito}`)
    }
  }

}
