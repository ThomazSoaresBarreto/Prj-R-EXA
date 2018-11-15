import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {LoginComponent} from './security/login/login.component'
import {LoggedInGuard} from './security/loggedin.guard'

import {ServicosComponent} from './servicos/servicos.component'
import {ServicoDetailComponent} from './servico-detail/servico-detail.component'
import { PedidoExameComponent } from './pedido-exame/pedido-exame.component'
import { LegalComponent } from './legal/legal.component';

import {OrderSummaryComponent} from './order-summary/order-summary.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'requisicao-exame', component: PedidoExameComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'servico-detail/:id', component: ServicoDetailComponent},
  {path: 'order-ped-exame', loadChildren:'./order-ped-exame/order-ped-exame.module#OrderPedExameModule',
    data: { preload: true }},
  {path: 'order', loadChildren:'./order/order.module#OrderModule',
    data: { preload: true }, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  {path: 'legal', component: LegalComponent},
  {path: 'about', loadChildren:'./about/about.module#AboutModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: '**', component: NotFoundComponent}
]
