import { Component, OnInit } from '@angular/core';

import { DocOrtoService } from '../../doc-ortodonticas/doc-ortodonticas.service';

@Component({
  selector: 'mt-exam-documentacoes',
  templateUrl: './exam-documentacoes.component.html',
  styleUrls: ['./exam-documentacoes.component.css'],
  preserveWhitespaces: true
})
export class ExamDocumentacoesComponent implements OnInit {

  constructor(private docOrtoService: DocOrtoService) { }

  ngOnInit() {}

  clear(){
    this.docOrtoService.clearDocOrto()
  }

}
