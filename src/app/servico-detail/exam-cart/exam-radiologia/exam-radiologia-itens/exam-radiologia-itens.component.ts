import { Component, OnInit } from '@angular/core';

import { RadiologiaService } from '../../../radiologia/radiologia.service';


@Component({
  selector: 'mt-exam-radiologia-itens',
  templateUrl: './exam-radiologia-itens.component.html',
  styleUrls: ['./exam-radiologia-itens.component.css']
})
export class ExamRadiologiaItensComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService) { }

  ngOnInit() {
  }

}
