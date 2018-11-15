import { Component, OnInit } from '@angular/core';

import { TomografiaService } from '../../../tomografia/tomografia.service'

@Component({
  selector: 'mt-exam-tc-itens',
  templateUrl: './exam-tc-itens.component.html',
  styleUrls: ['./exam-tc-itens.component.css']
})
export class ExamTcItensComponent implements OnInit {

  constructor(private tomografiaService: TomografiaService) { }

  ngOnInit() {
  }

}
