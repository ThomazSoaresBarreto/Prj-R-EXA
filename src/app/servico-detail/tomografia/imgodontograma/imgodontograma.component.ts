import { Component, OnInit } from '@angular/core';

import { TomografiaService } from './../tomografia.service'


@Component({
  selector: 'mt-imgodontograma',
  templateUrl: './imgodontograma.component.html',
  styleUrls: ['./imgodontograma.component.css']
})
export class ImgodontogramaComponent implements OnInit {

  constructor(public tomografiaService: TomografiaService) { }

  ngOnInit() {
  }




}
