import { Component, OnInit } from '@angular/core';

import { RadiologiaService } from './../radiologia.service'



@Component({
  selector: 'mt-rad-odontograma',
  templateUrl: './rad-odontograma.component.html',
  styleUrls: ['./rad-odontograma.component.css']
})
export class RadOdontogramaComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService) { }

  ngOnInit() {}

  

}
