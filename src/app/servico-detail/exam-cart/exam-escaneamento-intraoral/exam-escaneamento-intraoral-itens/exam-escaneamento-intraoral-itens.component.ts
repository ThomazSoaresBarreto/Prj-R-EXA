import { Component, OnInit } from '@angular/core';

import { EscaneamentoIntraoralService } from '../../../escaneamento-intraoral/escaneamento-intraoral.service';

@Component({
  selector: 'mt-exam-escaneamento-intraoral-itens',
  templateUrl: './exam-escaneamento-intraoral-itens.component.html',
  styleUrls: ['./exam-escaneamento-intraoral-itens.component.css']
})
export class ExamEscaneamentoIntraoralItensComponent implements OnInit {

  constructor(private escaneamentoIntraoralService: EscaneamentoIntraoralService) { }

  ngOnInit() {
  }

}
