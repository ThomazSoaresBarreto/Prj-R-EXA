import { Component, OnInit } from '@angular/core';
import { MenuServicoService } from '../../servico-detail/menu-servico/menu-servico.service'
import { TomografiaService } from '../../servico-detail/tomografia/tomografia.service'

declare var $: any;

@Component({
  selector: 'mt-modal-odontograma',
  templateUrl: './modal-odontograma.component.html',
  styleUrls: ['./modal-odontograma.component.css']
})
export class ModalOdontogramaComponent implements OnInit {

  constructor(private menuServicoService : MenuServicoService,
              private tomografiaService : TomografiaService) { }

  ngOnInit() {
  }

  clickConfirmar(){
    this.tomografiaService.periodontiaOdontograma =this.menuServicoService.returnSelecionado()
    console.log(this.tomografiaService.periodontiaOdontograma)
    $("#myModal").modal('hide');
  }


    Modal(){
      $("#myModal").modal('show');
    }



}
