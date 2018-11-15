import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from "@angular/common"
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'
import { MenuServicoComponent } from '../servico-detail/menu-servico/menu-servico.component';
import { ExamListaCompletaComponent } from '../servico-detail/exam-cart/exam-lista-completa/exam-lista-completa.component';
import { ExamTcItensComponent } from '../servico-detail/exam-cart/exam-tc/exam-tc-itens/exam-tc-itens.component';
import { ExamRadiologiaItensComponent } from '../servico-detail/exam-cart/exam-radiologia/exam-radiologia-itens/exam-radiologia-itens.component';
import { ExamDocumentacoesItensComponent } from '../servico-detail/exam-cart/exam-documentacoes/exam-documentacoes-itens/exam-documentacoes-itens.component';
import { ExamEscaneamentoIntraoralItensComponent } from '../servico-detail/exam-cart/exam-escaneamento-intraoral/exam-escaneamento-intraoral-itens/exam-escaneamento-intraoral-itens.component';
import { FormatoEntregaComponent } from '../servico-detail/formato-entrega/formato-entrega.component';

import { KzMaskDirective } from './masked-input/kz-mask.directive'
import { FocusDirective } from './focus/focus.directive'

import { ModalOdontogramaComponent } from './modal-odontograma/modal-odontograma.component';
import { ModalExamesRequisitadosComponent } from './modal-exames-requisitados/modal-exames-requisitados.component';
import { ModalFormatoentregaComponent } from './modal-formatoentrega/modal-formatoentrega.component';


import { ServicosService } from '../servicos/servicos.service';
import { TomografiaService } from '../servico-detail/tomografia/tomografia.service';
import { RadiologiaService } from '../servico-detail/radiologia/radiologia.service';
import { DocOrtoService } from '../servico-detail/doc-ortodonticas/doc-ortodonticas.service';
import { EscaneamentoIntraoralService } from '../servico-detail/escaneamento-intraoral/escaneamento-intraoral.service';


import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { NotificationService } from './messages/notification.service'
import {LoginService} from '../security/login/login.service'

import {LoggedInGuard} from '../security/loggedin.guard'
import {LeaveOrderGuard} from '../order/leave-order.guard'
import {AuthInterceptor} from "../security/auth.interceptor";
import { MenuServicoService } from '../servico-detail/menu-servico/menu-servico.service';
import { SharedService } from './shared.service'
import { OrderPedExameService } from '../order-ped-exame/order-ped-exame.service';
import { ModalOrderPedImpressaoComponent } from './modal-order-ped-impressao/modal-order-ped-impressao.component'



@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, MenuServicoComponent,
                ExamListaCompletaComponent, ExamTcItensComponent, ExamRadiologiaItensComponent,
                ExamDocumentacoesItensComponent, ExamEscaneamentoIntraoralItensComponent, FormatoEntregaComponent,
                KzMaskDirective, FocusDirective,
                ModalOdontogramaComponent, ModalExamesRequisitadosComponent, ModalFormatoentregaComponent, ModalOrderPedImpressaoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, MenuServicoComponent,
            ExamListaCompletaComponent, ExamTcItensComponent, ExamRadiologiaItensComponent,
            ExamDocumentacoesItensComponent, ExamEscaneamentoIntraoralItensComponent, FormatoEntregaComponent,
            KzMaskDirective, FocusDirective,
            ModalOdontogramaComponent, ModalExamesRequisitadosComponent, ModalFormatoentregaComponent,ModalOrderPedImpressaoComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ServicosService,
                  TomografiaService,
                  RadiologiaService,
                  DocOrtoService,
                  EscaneamentoIntraoralService,
                  SharedService,
                  MenuServicoService,
                  OrderPedExameService,
                  NotificationService,
                  LoginService,
                  LoggedInGuard,
                  LeaveOrderGuard,
                  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
                 ]
    }
  }
}
