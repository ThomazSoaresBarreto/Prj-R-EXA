import { Component, OnInit } from '@angular/core';

import { RadiologiaService } from '../../radiologia/radiologia.service';

@Component({
  selector: 'mt-exam-radiologia',
  templateUrl: './exam-radiologia.component.html',
  styleUrls: ['./exam-radiologia.component.css'],
  preserveWhitespaces: true
})
export class ExamRadiologiaComponent implements OnInit {

  constructor(private radiologiaService: RadiologiaService) { }

  ngOnInit() {}

  clear(){
    this.radiologiaService.clearRadiologia()
  }

}
