import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormatoEntrega } from './formatoentrega.model'

@Component({
  selector: 'mt-formato-entrega',
  templateUrl: './formato-entrega.component.html',
  styleUrls: ['./formato-entrega.component.css']
})

export class FormatoEntregaComponent implements OnChanges {


  @Input() origemServico;
  @Input() statusFormatoEntrega;

  @Output() respostaFormatoEntrega = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
      this.carregaFormatoEntrega(this.statusFormatoEntrega )
  }


  constructor() { }

  itensFormatoEntrega: FormatoEntrega = {
    isEmail:false,
    isShowEmail: false,
    dscEmail: 'E-mail',
    isCD: false,
    isShowCD: false,
    dscCD:'CD',
    isSemLaudo: false,
    isShowSemLaudo: false,
    dscSemLaudo: 'Sem Laudo',
    isImpresso: false,
    isShowImpresso: false,
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
  };


  carregaFormatoEntrega(carga:any){
    this.itensFormatoEntrega = carga
    }

}
