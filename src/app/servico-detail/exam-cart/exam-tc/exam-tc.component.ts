import { Component, OnInit } from '@angular/core';

import { TomografiaService } from '../../tomografia/tomografia.service'

@Component({
  selector: 'mt-exam-tc',
  templateUrl: './exam-tc.component.html',
  styleUrls: ['./exam-tc.component.css'],
  preserveWhitespaces: true
})
export class ExamTcComponent implements OnInit {

  constructor(private tomografiaService: TomografiaService) {
  }

  ngOnInit() {}

  itensCarrinho: any[] = [1];


  clear(){
    this.tomografiaService.clearTomografia()
  }

}
