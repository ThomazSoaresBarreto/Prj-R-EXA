import { Component, OnInit } from '@angular/core';

import { DocOrtoService } from '../../../doc-ortodonticas/doc-ortodonticas.service';

@Component({
  selector: 'mt-exam-documentacoes-itens',
  templateUrl: './exam-documentacoes-itens.component.html',
  styleUrls: ['./exam-documentacoes-itens.component.css']
})
export class ExamDocumentacoesItensComponent implements OnInit {

  constructor(private docOrtoService: DocOrtoService) { }

  ngOnInit() {
  }

}
