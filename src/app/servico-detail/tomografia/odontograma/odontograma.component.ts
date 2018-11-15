import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-odontograma2',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  isBotao18: boolean = false;
  isBotao17: boolean = false;
  isBotao16: boolean = false;
  isBotao15: boolean = false;
  isBotao14: boolean = false;
  isBotao13: boolean = false;
  isBotao12: boolean = false;
  isBotao11: boolean = false;

  isBotao55: boolean = false;
  isBotao54: boolean = false;
  isBotao53: boolean = false;
  isBotao52: boolean = false;
  isBotao51: boolean = false;

  isBotao85: boolean = false;
  isBotao84: boolean = false;
  isBotao83: boolean = false;
  isBotao82: boolean = false;
  isBotao81: boolean = false;

  isBotao48: boolean = false;
  isBotao47: boolean = false;
  isBotao46: boolean = false;
  isBotao45: boolean = false;
  isBotao44: boolean = false;
  isBotao43: boolean = false;
  isBotao42: boolean = false;
  isBotao41: boolean = false;

  isBotao21: boolean = false;
  isBotao22: boolean = false;
  isBotao23: boolean = false;
  isBotao24: boolean = false;
  isBotao25: boolean = false;
  isBotao26: boolean = false;
  isBotao27: boolean = false;
  isBotao28: boolean = false;

  isBotao61: boolean = false;
  isBotao62: boolean = false;
  isBotao63: boolean = false;
  isBotao64: boolean = false;
  isBotao65: boolean = false;

  isBotao71: boolean = false;
  isBotao72: boolean = false;
  isBotao73: boolean = false;
  isBotao74: boolean = false;
  isBotao75: boolean = false;

  isBotao31: boolean = false;
  isBotao32: boolean = false;
  isBotao33: boolean = false;
  isBotao34: boolean = false;
  isBotao35: boolean = false;
  isBotao36: boolean = false;
  isBotao37: boolean = false;
  isBotao38: boolean = false;
  imag: string = "assets/img/18 E PretoT.png";
  imag18: string = "assets/img/18 E PretoT.png";
  imag17: string = "assets/img/17 E PretoT.png";
  imag16: string = "assets/img/16 E PretoT.png";
  imag15: string = "assets/img/16 E PretoT.png";
  imag14: string = "";
  imag13: string = "";
  imag12: string = "";
  imag11: string = "";




  clickBotao18(){
    if (this.isBotao18){
        this.imag18 = "assets/img/18 E PretoT.png"
    }else{
      this.imag18 = "assets/img/18 E VermelhoT.png"
    }
    this.isBotao18 = !this.isBotao18
  }
  clickBotao17(){
    if (this.isBotao17){
        this.imag17 = "assets/img/18 E PretoT.png"
    }else{
      this.imag17 = "assets/img/17 E VermelhoT.png"
    }
    this.isBotao17 = !this.isBotao17
  }
  clickBotao16(){
    if (this.isBotao16){
        this.imag16 = "assets/img/16 E PretoT.png"
    }else{
      this.imag16 = "assets/img/16 E VermelhoT.png"
    }
    this.isBotao16 = !this.isBotao16
  }
  clickBotao15(){
    this.isBotao15 = !this.isBotao15
  }

  clickBotao14(){
    this.isBotao14 = !this.isBotao14
  }
  clickBotao13(){
    this.isBotao13 = !this.isBotao13
  }
  clickBotao12(){
    this.isBotao12 = !this.isBotao12
  }
  clickBotao11(){
    this.isBotao11 = !this.isBotao11
  }

  clickBotao21(){
    this.isBotao21 = !this.isBotao21
  }

  clickBotao22(){
    this.isBotao22 = !this.isBotao22
  }

  clickBotao23(){
    this.isBotao23 = !this.isBotao23
  }

  clickBotao24(){
    this.isBotao24 = !this.isBotao24
  }

  clickBotao25(){
    this.isBotao25 = !this.isBotao25
  }

  clickBotao26(){
    this.isBotao26 = !this.isBotao26
  }

  clickBotao27(){
    this.isBotao27 = !this.isBotao27
  }

  clickBotao28(){
    this.isBotao28 = !this.isBotao28
  }

  clickBotao55(){
    this.isBotao55 = !this.isBotao55
  }

  clickBotao54(){
    this.isBotao54 = !this.isBotao54
  }

  clickBotao53(){
    this.isBotao53 = !this.isBotao53
  }

  clickBotao52(){
    this.isBotao52 = !this.isBotao52
  }

  clickBotao51(){
    this.isBotao51 = !this.isBotao51
  }

  clickBotao61(){
    this.isBotao61 = !this.isBotao61
  }

  clickBotao62(){
    this.isBotao62 = !this.isBotao62
  }

  clickBotao63(){
    this.isBotao63 = !this.isBotao63
  }

  clickBotao64(){
    this.isBotao64 = !this.isBotao64
  }
  clickBotao65(){
    this.isBotao65 = !this.isBotao65
  }

  clickBotao85(){
    this.isBotao85 = !this.isBotao85
  }
  clickBotao84(){
    this.isBotao84 = !this.isBotao84
  }
  clickBotao83(){
    this.isBotao83 = !this.isBotao83
  }
  clickBotao82(){
    this.isBotao82 = !this.isBotao82
  }
  clickBotao81(){
    this.isBotao81 = !this.isBotao81
  }

  clickBotao71(){
    this.isBotao71 = !this.isBotao71
  }

  clickBotao72(){
    this.isBotao72 = !this.isBotao72
  }

  clickBotao73(){
    this.isBotao73 = !this.isBotao73
  }

  clickBotao74(){
    this.isBotao74 = !this.isBotao74
  }

  clickBotao75(){
    this.isBotao75 = !this.isBotao75
  }
  clickBotao48(){
    this.isBotao48 = !this.isBotao48
  }
  clickBotao47(){
    this.isBotao47 = !this.isBotao47
  }
  clickBotao46(){
    this.isBotao46 = !this.isBotao46
  }
  clickBotao45(){
    this.isBotao45 = !this.isBotao45
  }
  clickBotao44(){
    this.isBotao44 = !this.isBotao44
  }
  clickBotao43(){
    this.isBotao43 = !this.isBotao43
  }
  clickBotao42(){
    this.isBotao42 = !this.isBotao42
  }
  clickBotao41(){
    this.isBotao41 = !this.isBotao41
  }
  clickBotao31(){
    this.isBotao31 = !this.isBotao31
  }
  clickBotao32(){
    this.isBotao32 = !this.isBotao32
  }
  clickBotao33(){
    this.isBotao33 = !this.isBotao33
  }
  clickBotao34(){
    this.isBotao34 = !this.isBotao34
  }
  clickBotao35(){
    this.isBotao35 = !this.isBotao35
  }
  clickBotao36(){
    this.isBotao36 = !this.isBotao36
  }
  clickBotao37(){
    this.isBotao37 = !this.isBotao37
  }
  clickBotao38(){
    this.isBotao38 = !this.isBotao38
  }

  constructor() { }

  ngOnInit() {
  }

}
