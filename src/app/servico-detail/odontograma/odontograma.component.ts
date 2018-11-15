import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuServicoService } from '../menu-servico/menu-servico.service'

import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ]),
      transition('ready => void', [
        style({opacity: 0, transform: 'translateY(10px)'}),
        animate('400ms 0s ease-out')
      ])
    ])
  ]
})
export class OdontogramaComponent implements OnInit {

  @Input() recebeOdontograma;
  @Output() respostaOdontograma = new EventEmitter();

  menuItemState = 'ready'

  constructor(private menuServicoService : MenuServicoService) { }

  ngOnInit() {
    this.carregaOdontograma(this.recebeOdontograma)
  }

  clickBotao(botao:string){
    switch(botao){
      case botao='18':{
        this.itensOdontograma.isBotao18 = !this.itensOdontograma.isBotao18
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='17':{
        this.itensOdontograma.isBotao17 = !this.itensOdontograma.isBotao17
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='16':{
        this.itensOdontograma.isBotao16 = !this.itensOdontograma.isBotao16
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='15':{
        this.itensOdontograma.isBotao15 = !this.itensOdontograma.isBotao15
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='14':{
        this.itensOdontograma.isBotao14 = !this.itensOdontograma.isBotao14
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='13':{
        this.itensOdontograma.isBotao13 = !this.itensOdontograma.isBotao13
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='12':{
        this.itensOdontograma.isBotao12 = !this.itensOdontograma.isBotao12
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='11':{
        this.itensOdontograma.isBotao11 = !this.itensOdontograma.isBotao11
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='21':{
        this.itensOdontograma.isBotao21 = !this.itensOdontograma.isBotao21
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='22':{
        this.itensOdontograma.isBotao22 = !this.itensOdontograma.isBotao22
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='23':{
        this.itensOdontograma.isBotao23 = !this.itensOdontograma.isBotao23
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='24':{
        this.itensOdontograma.isBotao24 = !this.itensOdontograma.isBotao24
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='25':{
        this.itensOdontograma.isBotao25 = !this.itensOdontograma.isBotao25
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='26':{
        this.itensOdontograma.isBotao26 = !this.itensOdontograma.isBotao26
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='27':{
        this.itensOdontograma.isBotao27 = !this.itensOdontograma.isBotao27
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='28':{
        this.itensOdontograma.isBotao28 = !this.itensOdontograma.isBotao28
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='55':{
        this.itensOdontograma.isBotao55 = !this.itensOdontograma.isBotao55
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='54':{
        this.itensOdontograma.isBotao54 = !this.itensOdontograma.isBotao54
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='53':{
        this.itensOdontograma.isBotao53 = !this.itensOdontograma.isBotao53
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='52':{
        this.itensOdontograma.isBotao52 = !this.itensOdontograma.isBotao52
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='51':{
        this.itensOdontograma.isBotao51 = !this.itensOdontograma.isBotao51
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='61':{
        this.itensOdontograma.isBotao61 = !this.itensOdontograma.isBotao61
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='62':{
        this.itensOdontograma.isBotao62 = !this.itensOdontograma.isBotao62
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='63':{
        this.itensOdontograma.isBotao63 = !this.itensOdontograma.isBotao63
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='64':{
        this.itensOdontograma.isBotao64 = !this.itensOdontograma.isBotao64
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='65':{
        this.itensOdontograma.isBotao65 = !this.itensOdontograma.isBotao65
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='85':{
        this.itensOdontograma.isBotao85 = !this.itensOdontograma.isBotao85
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='84':{
        this.itensOdontograma.isBotao84 = !this.itensOdontograma.isBotao84
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='83':{
        this.itensOdontograma.isBotao83 = !this.itensOdontograma.isBotao83
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='82':{
        this.itensOdontograma.isBotao82 = !this.itensOdontograma.isBotao82
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='81':{
        this.itensOdontograma.isBotao81 = !this.itensOdontograma.isBotao81
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='71':{
        this.itensOdontograma.isBotao71 = !this.itensOdontograma.isBotao71
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='72':{
        this.itensOdontograma.isBotao72 = !this.itensOdontograma.isBotao72
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='73':{
        this.itensOdontograma.isBotao73 = !this.itensOdontograma.isBotao73
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='74':{
        this.itensOdontograma.isBotao74 = !this.itensOdontograma.isBotao74
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='75':{
        this.itensOdontograma.isBotao75 = !this.itensOdontograma.isBotao75
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='48':{
        this.itensOdontograma.isBotao48 = !this.itensOdontograma.isBotao48
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='47':{
        this.itensOdontograma.isBotao47 = !this.itensOdontograma.isBotao47
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='46':{
        this.itensOdontograma.isBotao46 = !this.itensOdontograma.isBotao46
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='45':{
        this.itensOdontograma.isBotao45 = !this.itensOdontograma.isBotao45
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='44':{
        this.itensOdontograma.isBotao44 = !this.itensOdontograma.isBotao44
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='43':{
        this.itensOdontograma.isBotao43 = !this.itensOdontograma.isBotao43
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='42':{
        this.itensOdontograma.isBotao42 = !this.itensOdontograma.isBotao42
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='41':{
        this.itensOdontograma.isBotao41 = !this.itensOdontograma.isBotao41
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='31':{
        this.itensOdontograma.isBotao31 = !this.itensOdontograma.isBotao31
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='32':{
        this.itensOdontograma.isBotao32 = !this.itensOdontograma.isBotao32
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='33':{
        this.itensOdontograma.isBotao33 = !this.itensOdontograma.isBotao33
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='34':{
        this.itensOdontograma.isBotao34 = !this.itensOdontograma.isBotao34
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='35':{
        this.itensOdontograma.isBotao35 = !this.itensOdontograma.isBotao35
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='36':{
        this.itensOdontograma.isBotao36 = !this.itensOdontograma.isBotao36
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='37':{
        this.itensOdontograma.isBotao37 = !this.itensOdontograma.isBotao37
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }
      case botao='38':{
        this.itensOdontograma.isBotao38 = !this.itensOdontograma.isBotao38
        this.respostaOdontograma.emit(this.returnSelecionado())
        break;
      }

    }
  }


  returnSelecionado(): any[]{
    let odontograma: any[] = []
    if(this.itensOdontograma.isBotao18){
      odontograma.push(this.itensOdontograma.idBotao18)
    }
    if(this.itensOdontograma.isBotao17){
      odontograma.push(this.itensOdontograma.idBotao17)
    }
    if(this.itensOdontograma.isBotao16){
      odontograma.push(this.itensOdontograma.idBotao16)
    }
    if(this.itensOdontograma.isBotao15){
      odontograma.push(this.itensOdontograma.idBotao15)
    }
    if(this.itensOdontograma.isBotao14){
      odontograma.push(this.itensOdontograma.idBotao14)
    }
    if(this.itensOdontograma.isBotao13){
      odontograma.push(this.itensOdontograma.idBotao13)
    }
    if(this.itensOdontograma.isBotao12){
      odontograma.push(this.itensOdontograma.idBotao12)
    }
    if(this.itensOdontograma.isBotao11){
      odontograma.push(this.itensOdontograma.idBotao11)
    }
    if(this.itensOdontograma.isBotao21){
      odontograma.push(this.itensOdontograma.idBotao21)
    }
    if(this.itensOdontograma.isBotao22){
      odontograma.push(this.itensOdontograma.idBotao22)
    }
    if(this.itensOdontograma.isBotao23){
      odontograma.push(this.itensOdontograma.idBotao23)
    }
    if(this.itensOdontograma.isBotao24){
      odontograma.push(this.itensOdontograma.idBotao24)
    }
    if(this.itensOdontograma.isBotao25){
      odontograma.push(this.itensOdontograma.idBotao25)
    }
    if(this.itensOdontograma.isBotao26){
      odontograma.push(this.itensOdontograma.idBotao26)
    }
    if(this.itensOdontograma.isBotao27){
      odontograma.push(this.itensOdontograma.idBotao27)
    }
    if(this.itensOdontograma.isBotao28){
      odontograma.push(this.itensOdontograma.idBotao28)
    }
    if(this.itensOdontograma.isBotao55){
      odontograma.push(this.itensOdontograma.idBotao55)
    }
    if(this.itensOdontograma.isBotao54){
      odontograma.push(this.itensOdontograma.idBotao54)
    }
    if(this.itensOdontograma.isBotao53){
      odontograma.push(this.itensOdontograma.idBotao53)
    }
    if(this.itensOdontograma.isBotao52){
      odontograma.push(this.itensOdontograma.idBotao52)
    }
    if(this.itensOdontograma.isBotao51){
      odontograma.push(this.itensOdontograma.idBotao51)
    }
    if(this.itensOdontograma.isBotao61){
      odontograma.push(this.itensOdontograma.idBotao61)
    }
    if(this.itensOdontograma.isBotao62){
      odontograma.push(this.itensOdontograma.idBotao62)
    }
    if(this.itensOdontograma.isBotao63){
      odontograma.push(this.itensOdontograma.idBotao63)
    }
    if(this.itensOdontograma.isBotao64){
      odontograma.push(this.itensOdontograma.idBotao64)
    }
    if(this.itensOdontograma.isBotao65){
      odontograma.push(this.itensOdontograma.idBotao65)
    }
    if(this.itensOdontograma.isBotao85){
      odontograma.push(this.itensOdontograma.idBotao85)
    }
    if(this.itensOdontograma.isBotao84){
      odontograma.push(this.itensOdontograma.idBotao84)
    }
    if(this.itensOdontograma.isBotao83){
      odontograma.push(this.itensOdontograma.idBotao83)
    }
    if(this.itensOdontograma.isBotao82){
      odontograma.push(this.itensOdontograma.idBotao82)
    }
    if(this.itensOdontograma.isBotao81){
      odontograma.push(this.itensOdontograma.idBotao81)
    }
    if(this.itensOdontograma.isBotao71){
      odontograma.push(this.itensOdontograma.idBotao71)
    }
    if(this.itensOdontograma.isBotao72){
      odontograma.push(this.itensOdontograma.idBotao72)
    }
    if(this.itensOdontograma.isBotao73){
      odontograma.push(this.itensOdontograma.idBotao73)
    }
    if(this.itensOdontograma.isBotao74){
      odontograma.push(this.itensOdontograma.idBotao74)
    }
    if(this.itensOdontograma.isBotao75){
      odontograma.push(this.itensOdontograma.idBotao75)
    }
    if(this.itensOdontograma.isBotao48){
      odontograma.push(this.itensOdontograma.idBotao48)
    }
    if(this.itensOdontograma.isBotao47){
      odontograma.push(this.itensOdontograma.idBotao47)
    }
    if(this.itensOdontograma.isBotao46){
      odontograma.push(this.itensOdontograma.idBotao46)
    }
    if(this.itensOdontograma.isBotao45){
      odontograma.push(this.itensOdontograma.idBotao45)
    }
    if(this.itensOdontograma.isBotao44){
      odontograma.push(this.itensOdontograma.idBotao44)
    }
    if(this.itensOdontograma.isBotao43){
      odontograma.push(this.itensOdontograma.idBotao43)
    }
    if(this.itensOdontograma.isBotao42){
      odontograma.push(this.itensOdontograma.idBotao42)
    }
    if(this.itensOdontograma.isBotao41){
      odontograma.push(this.itensOdontograma.idBotao41)
    }
    if(this.itensOdontograma.isBotao31){
      odontograma.push(this.itensOdontograma.idBotao31)
    }
    if(this.itensOdontograma.isBotao32){
      odontograma.push(this.itensOdontograma.idBotao32)
    }
    if(this.itensOdontograma.isBotao33){
      odontograma.push(this.itensOdontograma.idBotao33)
    }
    if(this.itensOdontograma.isBotao34){
      odontograma.push(this.itensOdontograma.idBotao34)
    }
    if(this.itensOdontograma.isBotao35){
      odontograma.push(this.itensOdontograma.idBotao35)
    }
    if(this.itensOdontograma.isBotao36){
      odontograma.push(this.itensOdontograma.idBotao36)
    }
    if(this.itensOdontograma.isBotao37){
      odontograma.push(this.itensOdontograma.idBotao37)
    }
    if(this.itensOdontograma.isBotao38){
      odontograma.push(this.itensOdontograma.idBotao38)
    }
    return odontograma
  }

  carregaOdontograma(carga:any[]){
    if(carga.length >0){
      for(var i = 0; i < carga.length; i++){
        if(carga[i] == '18'){
          this.itensOdontograma.isBotao18 = true
        }
        if(carga[i] == '17'){
          this.itensOdontograma.isBotao17 = true
        }
        if(carga[i] == '16'){
          this.itensOdontograma.isBotao16 = true
        }
        if(carga[i] == '15'){
          this.itensOdontograma.isBotao15 = true
        }
        if(carga[i] == '14'){
          this.itensOdontograma.isBotao14 = true
        }
        if(carga[i] == '13'){
          this.itensOdontograma.isBotao13 = true
        }
        if(carga[i] == '12'){
          this.itensOdontograma.isBotao12 = true
        }
        if(carga[i] == '11'){
          this.itensOdontograma.isBotao11 = true
        }
        if(carga[i] == '21'){
          this.itensOdontograma.isBotao21 = true
        }
        if(carga[i] == '22'){
          this.itensOdontograma.isBotao22 = true
        }
        if(carga[i] == '23'){
          this.itensOdontograma.isBotao23 = true
        }
        if(carga[i] == '24'){
          this.itensOdontograma.isBotao24 = true
        }
        if(carga[i] == '25'){
          this.itensOdontograma.isBotao25 = true
        }
        if(carga[i] == '26'){
          this.itensOdontograma.isBotao26 = true
        }
        if(carga[i] == '27'){
          this.itensOdontograma.isBotao27 = true
        }
        if(carga[i] == '28'){
          this.itensOdontograma.isBotao28 = true
        }
        if(carga[i] == '55'){
          this.itensOdontograma.isBotao55 = true
        }
        if(carga[i] == '54'){
          this.itensOdontograma.isBotao54 = true
        }
        if(carga[i] == '53'){
          this.itensOdontograma.isBotao53 = true
        }
        if(carga[i] == '52'){
          this.itensOdontograma.isBotao52 = true
        }
        if(carga[i] == '51'){
          this.itensOdontograma.isBotao51 = true
        }
        if(carga[i] == '61'){
          this.itensOdontograma.isBotao61 = true
        }
        if(carga[i] == '62'){
          this.itensOdontograma.isBotao62 = true
        }
        if(carga[i] == '63'){
          this.itensOdontograma.isBotao63 = true
        }
        if(carga[i] == '64'){
          this.itensOdontograma.isBotao64 = true
        }
        if(carga[i] == '65'){
          this.itensOdontograma.isBotao65 = true
        }
        if(carga[i] == '85'){
          this.itensOdontograma.isBotao85 = true
        }
        if(carga[i] == '84'){
          this.itensOdontograma.isBotao84 = true
        }
        if(carga[i] == '83'){
          this.itensOdontograma.isBotao83 = true
        }
        if(carga[i] == '82'){
          this.itensOdontograma.isBotao82 = true
        }
        if(carga[i] == '81'){
          this.itensOdontograma.isBotao81 = true
        }
        if(carga[i] == '71'){
          this.itensOdontograma.isBotao71 = true
        }
        if(carga[i] == '72'){
          this.itensOdontograma.isBotao72 = true
        }
        if(carga[i] == '73'){
          this.itensOdontograma.isBotao73 = true
        }
        if(carga[i] == '74'){
          this.itensOdontograma.isBotao74 = true
        }
        if(carga[i] == '75'){
          this.itensOdontograma.isBotao75 = true
        }
        if(carga[i] == '48'){
          this.itensOdontograma.isBotao48 = true
        }
        if(carga[i] == '47'){
          this.itensOdontograma.isBotao47 = true
        }
        if(carga[i] == '46'){
          this.itensOdontograma.isBotao46 = true
        }
        if(carga[i] == '45'){
          this.itensOdontograma.isBotao45 = true
        }
        if(carga[i] == '44'){
          this.itensOdontograma.isBotao44 = true
        }
        if(carga[i] == '43'){
          this.itensOdontograma.isBotao43 = true
        }
        if(carga[i] == '42'){
          this.itensOdontograma.isBotao42 = true
        }
        if(carga[i] == '41'){
          this.itensOdontograma.isBotao41 = true
        }
        if(carga[i] == '31'){
          this.itensOdontograma.isBotao31 = true
        }
        if(carga[i] == '32'){
          this.itensOdontograma.isBotao32 = true
        }
        if(carga[i] == '33'){
          this.itensOdontograma.isBotao33 = true
        }
        if(carga[i] == '34'){
          this.itensOdontograma.isBotao34 = true
        }
        if(carga[i] == '35'){
          this.itensOdontograma.isBotao35 = true
        }
        if(carga[i] == '36'){
          this.itensOdontograma.isBotao36 = true
        }
        if(carga[i] == '37'){
          this.itensOdontograma.isBotao37 = true
        }
        if(carga[i] == '38'){
          this.itensOdontograma.isBotao38 = true
        }

      }
    }

  }

  itensOdontograma: any = {
    idBotao18:"18",
    isBotao18: false,
    idBotao17:"17",
    isBotao17: false,
    idBotao16:"16",
    isBotao16: false,
    idBotao15:"15",
    isBotao15: false,
    idBotao14:"14",
    isBotao14: false,
    idBotao13:"13",
    isBotao13: false,
    idBotao12:"12",
    isBotao12: false,
    idBotao11:"11",
    isBotao11: false,
    idBotao21:"21",
    isBotao21: false,
    idBotao22:"22",
    isBotao22: false,
    idBotao23:"23",
    isBotao23: false,
    idBotao24:"24",
    isBotao24: false,
    idBotao25:"25",
    isBotao25: false,
    idBotao26:"26",
    isBotao26: false,
    idBotao27:"27",
    isBotao27: false,
    idBotao28:"28",
    isBotao28: false,
    idBotao55:"55",
    isBotao55: false,
    idBotao54:"54",
    isBotao54: false,
    idBotao53:"53",
    isBotao53: false,
    idBotao52:"52",
    isBotao52: false,
    idBotao51:"51",
    isBotao51: false,
    idBotao61:"61",
    isBotao61: false,
    idBotao62:"62",
    isBotao62: false,
    idBotao63:"63",
    isBotao63: false,
    idBotao64:"64",
    isBotao64: false,
    idBotao65:"65",
    isBotao65: false,
    idBotao85:"85",
    isBotao85: false,
    idBotao84:"84",
    isBotao84: false,
    idBotao83:"83",
    isBotao83: false,
    idBotao82:"82",
    isBotao82: false,
    idBotao81:"81",
    isBotao81: false,
    idBotao71:"71",
    isBotao71: false,
    idBotao72:"72",
    isBotao72: false,
    idBotao73:"73",
    isBotao73: false,
    idBotao74:"74",
    isBotao74: false,
    idBotao75:"75",
    isBotao75: false,
    idBotao48:"48",
    isBotao48: false,
    idBotao47:"47",
    isBotao47: false,
    idBotao46:"46",
    isBotao46: false,
    idBotao45:"45",
    isBotao45: false,
    idBotao44:"44",
    isBotao44: false,
    idBotao43:"43",
    isBotao43: false,
    idBotao42:"42",
    isBotao42: false,
    idBotao41:"41",
    isBotao41: false,
    idBotao31:"31",
    isBotao31: false,
    idBotao32:"32",
    isBotao32: false,
    idBotao33:"33",
    isBotao33: false,
    idBotao34:"34",
    isBotao34: false,
    idBotao35:"35",
    isBotao35: false,
    idBotao36:"36",
    isBotao36: false,
    idBotao37:"37",
    isBotao37: false,
    idBotao38:"38",
    isBotao38: false
  };

  clearItensOdontograma(){
    this.itensOdontograma.isBotao18= false
    this.itensOdontograma.isBotao17= false
    this.itensOdontograma.isBotao16= false
    this.itensOdontograma.isBotao15= false
    this.itensOdontograma.isBotao14= false
    this.itensOdontograma.isBotao13= false
    this.itensOdontograma.isBotao12= false
    this.itensOdontograma.isBotao11= false
    this.itensOdontograma.isBotao21= false
    this.itensOdontograma.isBotao22= false
    this.itensOdontograma.isBotao23= false
    this.itensOdontograma.isBotao24= false
    this.itensOdontograma.isBotao25= false
    this.itensOdontograma.isBotao26= false
    this.itensOdontograma.isBotao27= false
    this.itensOdontograma.isBotao28= false
    this.itensOdontograma.isBotao55= false
    this.itensOdontograma.isBotao54= false
    this.itensOdontograma.isBotao53= false
    this.itensOdontograma.isBotao52= false
    this.itensOdontograma.isBotao51= false
    this.itensOdontograma.isBotao61= false
    this.itensOdontograma.isBotao62= false
    this.itensOdontograma.isBotao63= false
    this.itensOdontograma.isBotao64= false
    this.itensOdontograma.isBotao65= false
    this.itensOdontograma.isBotao85= false
    this.itensOdontograma.isBotao84= false
    this.itensOdontograma.isBotao83= false
    this.itensOdontograma.isBotao82= false
    this.itensOdontograma.isBotao81= false
    this.itensOdontograma.isBotao71= false
    this.itensOdontograma.isBotao72= false
    this.itensOdontograma.isBotao73= false
    this.itensOdontograma.isBotao74= false
    this.itensOdontograma.isBotao75= false
    this.itensOdontograma.isBotao48= false
    this.itensOdontograma.isBotao47= false
    this.itensOdontograma.isBotao46= false
    this.itensOdontograma.isBotao45= false
    this.itensOdontograma.isBotao44= false
    this.itensOdontograma.isBotao43= false
    this.itensOdontograma.isBotao42= false
    this.itensOdontograma.isBotao41= false
    this.itensOdontograma.isBotao31= false
    this.itensOdontograma.isBotao32= false
    this.itensOdontograma.isBotao33= false
    this.itensOdontograma.isBotao34= false
    this.itensOdontograma.isBotao35= false
    this.itensOdontograma.isBotao36= false
    this.itensOdontograma.isBotao37= false
    this.itensOdontograma.isBotao38= false
  }


}
