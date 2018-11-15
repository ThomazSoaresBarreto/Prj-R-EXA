import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import { Servico } from './servico/servico.model';
import { ServicosService } from './servicos.service';

import {Observable, from} from 'rxjs'
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'


@Component({
  selector: 'mt-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css',],
  animations: [
  trigger('toggleSearch', [
    state('hidden', style({
      opacity: 0,
      "max-height": "0px"
    })),
    state('visible', style({
      opacity: 1,
      "max-height": "70px",
      "margin-top": "20px"
    })),
    transition('* => *', animate('250ms 0s ease-in-out'))
  ])
]
})

export class ServicosComponent implements OnInit {

  searchBarState = 'hidden'

  servicos: Servico[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private servicosService: ServicosService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap(searchTerm =>
            this.servicosService
            .servicos(searchTerm)
            .pipe(catchError(error=>from([]))))
        ).subscribe(servicos => this.servicos = servicos)

    this.servicos = this.servicosService.servicosDados
    //this.servicosService.servicos()
    //  .subscribe(servicos => this.servicos = servicos)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
