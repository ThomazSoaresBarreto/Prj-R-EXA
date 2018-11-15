import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import { Servico } from './servico.model';



@Component({
  selector: 'mt-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css'],
  preserveWhitespaces: true,
  animations: [
    trigger('servicoAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('1000ms 0s ease-in-out')
      ])
    ])
  ]
})

export class ServicoComponent implements OnInit {

  ServicoState ='ready'

  @Input() servico: Servico

  constructor() { }

  ngOnInit() {
  }

}
