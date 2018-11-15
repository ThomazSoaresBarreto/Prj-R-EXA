import { Component, OnInit } from '@angular/core';

import { MenuServicoService } from './menu-servico.service'

@Component({
  selector: 'mt-menu-servico',
  templateUrl: './menu-servico.component.html',
  styleUrls: ['./menu-servico.component.css']
})
export class MenuServicoComponent implements OnInit {


  constructor(private menuServicoService : MenuServicoService) { }

  ngOnInit() {
  }


  clickBotao(botao:string){
    switch(botao){
      case botao='18':{
        this.menuServicoService.itensOdontograma.isBotao18 = !this.menuServicoService.itensOdontograma.isBotao18
        break;
      }
      case botao='17':{
        this.menuServicoService.itensOdontograma.isBotao17 = !this.menuServicoService.itensOdontograma.isBotao17
        break;
      }
      case botao='16':{
        this.menuServicoService.itensOdontograma.isBotao16 = !this.menuServicoService.itensOdontograma.isBotao16
        break;
      }
      case botao='15':{
        this.menuServicoService.itensOdontograma.isBotao15 = !this.menuServicoService.itensOdontograma.isBotao15
        break;
      }
      case botao='14':{
        this.menuServicoService.itensOdontograma.isBotao14 = !this.menuServicoService.itensOdontograma.isBotao14
        break;
      }
      case botao='13':{
        this.menuServicoService.itensOdontograma.isBotao13 = !this.menuServicoService.itensOdontograma.isBotao13
        break;
      }
      case botao='12':{
        this.menuServicoService.itensOdontograma.isBotao12 = !this.menuServicoService.itensOdontograma.isBotao12
        break;
      }
      case botao='11':{
        this.menuServicoService.itensOdontograma.isBotao11 = !this.menuServicoService.itensOdontograma.isBotao11
        break;
      }
      case botao='21':{
        this.menuServicoService.itensOdontograma.isBotao21 = !this.menuServicoService.itensOdontograma.isBotao21
        break;
      }
      case botao='22':{
        this.menuServicoService.itensOdontograma.isBotao22 = !this.menuServicoService.itensOdontograma.isBotao22
        break;
      }
      case botao='23':{
        this.menuServicoService.itensOdontograma.isBotao23 = !this.menuServicoService.itensOdontograma.isBotao23
        break;
      }
      case botao='24':{
        this.menuServicoService.itensOdontograma.isBotao24 = !this.menuServicoService.itensOdontograma.isBotao24
        break;
      }
      case botao='25':{
        this.menuServicoService.itensOdontograma.isBotao25 = !this.menuServicoService.itensOdontograma.isBotao25
        break;
      }
      case botao='26':{
        this.menuServicoService.itensOdontograma.isBotao26 = !this.menuServicoService.itensOdontograma.isBotao26
        break;
      }
      case botao='27':{
        this.menuServicoService.itensOdontograma.isBotao27 = !this.menuServicoService.itensOdontograma.isBotao27
        break;
      }
      case botao='28':{
        this.menuServicoService.itensOdontograma.isBotao28 = !this.menuServicoService.itensOdontograma.isBotao28
        break;
      }
      case botao='55':{
        this.menuServicoService.itensOdontograma.isBotao55 = !this.menuServicoService.itensOdontograma.isBotao55
        break;
      }
      case botao='54':{
        this.menuServicoService.itensOdontograma.isBotao54 = !this.menuServicoService.itensOdontograma.isBotao54
        break;
      }
      case botao='53':{
        this.menuServicoService.itensOdontograma.isBotao53 = !this.menuServicoService.itensOdontograma.isBotao53
        break;
      }
      case botao='52':{
        this.menuServicoService.itensOdontograma.isBotao52 = !this.menuServicoService.itensOdontograma.isBotao52
        break;
      }
      case botao='51':{
        this.menuServicoService.itensOdontograma.isBotao51 = !this.menuServicoService.itensOdontograma.isBotao51
        break;
      }
      case botao='61':{
        this.menuServicoService.itensOdontograma.isBotao61 = !this.menuServicoService.itensOdontograma.isBotao61
        break;
      }
      case botao='62':{
        this.menuServicoService.itensOdontograma.isBotao62 = !this.menuServicoService.itensOdontograma.isBotao62
        break;
      }
      case botao='63':{
        this.menuServicoService.itensOdontograma.isBotao63 = !this.menuServicoService.itensOdontograma.isBotao63
        break;
      }
      case botao='64':{
        this.menuServicoService.itensOdontograma.isBotao64 = !this.menuServicoService.itensOdontograma.isBotao64
        break;
      }
      case botao='65':{
        this.menuServicoService.itensOdontograma.isBotao65 = !this.menuServicoService.itensOdontograma.isBotao65
        break;
      }
      case botao='85':{
        this.menuServicoService.itensOdontograma.isBotao85 = !this.menuServicoService.itensOdontograma.isBotao85
        break;
      }
      case botao='84':{
        this.menuServicoService.itensOdontograma.isBotao84 = !this.menuServicoService.itensOdontograma.isBotao84
        break;
      }
      case botao='83':{
        this.menuServicoService.itensOdontograma.isBotao83 = !this.menuServicoService.itensOdontograma.isBotao83
        break;
      }
      case botao='82':{
        this.menuServicoService.itensOdontograma.isBotao82 = !this.menuServicoService.itensOdontograma.isBotao82
        break;
      }
      case botao='81':{
        this.menuServicoService.itensOdontograma.isBotao81 = !this.menuServicoService.itensOdontograma.isBotao81
        break;
      }
      case botao='71':{
        this.menuServicoService.itensOdontograma.isBotao71 = !this.menuServicoService.itensOdontograma.isBotao71
        break;
      }
      case botao='72':{
        this.menuServicoService.itensOdontograma.isBotao72 = !this.menuServicoService.itensOdontograma.isBotao72
        break;
      }
      case botao='73':{
        this.menuServicoService.itensOdontograma.isBotao73 = !this.menuServicoService.itensOdontograma.isBotao73
        break;
      }
      case botao='74':{
        this.menuServicoService.itensOdontograma.isBotao74 = !this.menuServicoService.itensOdontograma.isBotao74
        break;
      }
      case botao='75':{
        this.menuServicoService.itensOdontograma.isBotao75 = !this.menuServicoService.itensOdontograma.isBotao75
        break;
      }
      case botao='48':{
        this.menuServicoService.itensOdontograma.isBotao48 = !this.menuServicoService.itensOdontograma.isBotao48
        break;
      }
      case botao='47':{
        this.menuServicoService.itensOdontograma.isBotao47 = !this.menuServicoService.itensOdontograma.isBotao47
        break;
      }
      case botao='46':{
        this.menuServicoService.itensOdontograma.isBotao46 = !this.menuServicoService.itensOdontograma.isBotao46
        break;
      }
      case botao='45':{
        this.menuServicoService.itensOdontograma.isBotao45 = !this.menuServicoService.itensOdontograma.isBotao45
        break;
      }
      case botao='44':{
        this.menuServicoService.itensOdontograma.isBotao44 = !this.menuServicoService.itensOdontograma.isBotao44
        break;
      }
      case botao='43':{
        this.menuServicoService.itensOdontograma.isBotao43 = !this.menuServicoService.itensOdontograma.isBotao43
        break;
      }
      case botao='42':{
        this.menuServicoService.itensOdontograma.isBotao42 = !this.menuServicoService.itensOdontograma.isBotao42
        break;
      }
      case botao='41':{
        this.menuServicoService.itensOdontograma.isBotao41 = !this.menuServicoService.itensOdontograma.isBotao41
        break;
      }
      case botao='31':{
        this.menuServicoService.itensOdontograma.isBotao31 = !this.menuServicoService.itensOdontograma.isBotao31
        break;
      }
      case botao='32':{
        this.menuServicoService.itensOdontograma.isBotao32 = !this.menuServicoService.itensOdontograma.isBotao32
        break;
      }
      case botao='33':{
        this.menuServicoService.itensOdontograma.isBotao33 = !this.menuServicoService.itensOdontograma.isBotao33
        break;
      }
      case botao='34':{
        this.menuServicoService.itensOdontograma.isBotao34 = !this.menuServicoService.itensOdontograma.isBotao34
        break;
      }
      case botao='35':{
        this.menuServicoService.itensOdontograma.isBotao35 = !this.menuServicoService.itensOdontograma.isBotao35
        break;
      }
      case botao='36':{
        this.menuServicoService.itensOdontograma.isBotao36 = !this.menuServicoService.itensOdontograma.isBotao36
        break;
      }
      case botao='37':{
        this.menuServicoService.itensOdontograma.isBotao37 = !this.menuServicoService.itensOdontograma.isBotao37
        break;
      }
      case botao='38':{
        this.menuServicoService.itensOdontograma.isBotao38 = !this.menuServicoService.itensOdontograma.isBotao38
        break;
      }

    }
  }


}
