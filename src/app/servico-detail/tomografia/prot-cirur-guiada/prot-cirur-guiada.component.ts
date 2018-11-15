import { Component, OnInit } from '@angular/core';
//import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

import { TomografiaService } from '../tomografia.service'

import { NotificationService } from '../../../shared/messages/notification.service'



@Component({
  selector: 'mt-prot-cirur-guiada',
  templateUrl: './prot-cirur-guiada.component.html',
  styleUrls: ['./prot-cirur-guiada.component.css']
})
export class ProtCirurGuiadaComponent implements OnInit{

  constructor(public tomografiaService: TomografiaService,
              private notificationService: NotificationService) { }


  fMsgSnackBar(isOrigem:any, idOrigem:any){
    switch(isOrigem){
      case isOrigem=true:{
        this.notificationService.notify(`Você adicionou na lista de exames o item ${idOrigem}`)
        break;
      }
      case isOrigem=false:{
        this.notificationService.notify(`Você retirou da lista de exames o item ${idOrigem}`)
        break;
      }
    }
  }

  ngOnInit() {
  }

  clickProtocoloCirurgiaGuiada(){
    this.tomografiaService.isPrtCirGuiada = !this.tomografiaService.isPrtCirGuiada
  }

  checkCirurgGuiada(origem: number){
    if(origem == 1){
      if(this.tomografiaService.protCirurGuiada.isCirurgiaGuiadaTotal){
        this.tomografiaService.clearCirurgiaGuiadaTotal()
      }else{
        this.tomografiaService.protCirurGuiada.isCirurgiaGuiadaTotal= true
        this.tomografiaService.clearCirurgiaGuiadaParcial()
      }
    }else{
      if(this.tomografiaService.protCirurGuiada.isCirurgiaGuiadaParcial){
        this.tomografiaService.clearCirurgiaGuiadaParcial()
      }else{
        this.tomografiaService.protCirurGuiada.isCirurgiaGuiadaParcial=true
        this.tomografiaService.clearCirurgiaGuiadaTotal()
      }

    }
  }

  fSelectCGP(valor:string){
    let valorAnt = this.tomografiaService.protCirurGuiada.idPlanejamentoFuroCGP
    this.tomografiaService.protCirurGuiada.idPlanejamentoFuroCGP = valor
    if(valor.length != 0){
      this.tomografiaService.protCirurGuiada.isPlanejamentoFuroCGP = true
      if(valorAnt = ""){
        this.notificationService.
          notify(`Você adicionou na lista de exames o item da Cirurgia guiada total->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGP+valor}`)
      }else{
        this.notificationService.
          notify(`Você alterou na lista de exames o item da Cirurgia guiada total para->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGP+valor}`)
      }
    }else{
      this.tomografiaService.protCirurGuiada.isPlanejamentoFuroCGT = false
      this.notificationService.
        notify(`Você retirou da lista de exames o item da Cirurgia guiada total->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGP+valorAnt}`)
    }
  }

  fSelectCGT(valor:string){
    let valorAnt = this.tomografiaService.protCirurGuiada.idPlanejamentoFuroCGT
    this.tomografiaService.protCirurGuiada.idPlanejamentoFuroCGT = valor
    if(valor.length != 0){
      this.tomografiaService.protCirurGuiada.isPlanejamentoFuroCGT = true
      if(valorAnt = ""){
        this.notificationService.
          notify(`Você adicionou na lista de exames o item da Cirurgia guiada total->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGT+valor}`)
      }else{
        this.notificationService.
          notify(`Você alterou na lista de exames o item da Cirurgia guiada total para->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGT+valor}`)
      }
    }else{
      this.tomografiaService.protCirurGuiada.isPlanejamentoFuroCGT = false
      this.notificationService.
        notify(`Você retirou da lista de exames o item da Cirurgia guiada total->${this.tomografiaService.protCirurGuiada.idPlanejamentoCGT+valorAnt}`)
    }
  }


}
