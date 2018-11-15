import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-exam-cart',
  templateUrl: './exam-cart.component.html',
  styleUrls: ['./exam-cart.component.css'],
  preserveWhitespaces: true
})
export class ExamCartComponent implements OnInit {

  @Input() origemServico;

  constructor() {
  }

  ngOnInit() {
  }

}
