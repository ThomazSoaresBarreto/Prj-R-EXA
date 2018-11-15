import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../shared/messages/notification.service';

import { EscaneamentoIntraoralService } from '../../escaneamento-intraoral/escaneamento-intraoral.service';

@Component({
  selector: 'mt-exam-escaneamento-intraoral',
  templateUrl: './exam-escaneamento-intraoral.component.html',
  styleUrls: ['./exam-escaneamento-intraoral.component.css']
})
export class ExamEscaneamentoIntraoralComponent implements OnInit {

  constructor(private escaneamentoIntraoralService: EscaneamentoIntraoralService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }

  clear(){
    this.escaneamentoIntraoralService.clearEscaneamentointraoral()
  }

}
