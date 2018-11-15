import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import { OrderPedExameComponent } from './order-ped-exame.component'

import { ExamListaCompletaComponent } from '../servico-detail/exam-cart/exam-lista-completa/exam-lista-completa.component';
import { ObservacoesComponent } from './observacoes/observacoes.component';
import { OrderPedImpressaoComponent } from './order-ped-impressao/order-ped-impressao.component'



const ROUTES: Routes = [
  {path: '', component: OrderPedExameComponent}
]

@NgModule({
  declarations:[OrderPedExameComponent, ObservacoesComponent, OrderPedImpressaoComponent],
  imports: [ SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderPedExameModule {

}
