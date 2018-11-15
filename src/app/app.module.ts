import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {LocationStrategy, HashLocationStrategy, registerLocaleData} from '@angular/common'
import locatePt from '@angular/common/locales/pt'

registerLocaleData(locatePt, 'pt')

import { AppCustomPreloader } from './app-routing-loader';

import {ApplicationErrorHandler}  from './app.error-handler'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

import { PedidoExameComponent } from './pedido-exame/pedido-exame.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ServicoComponent } from './servicos/servico/servico.component';
import { ServicoDetailComponent } from './servico-detail/servico-detail.component'


import { ProtCirurGuiadaComponent } from './servico-detail/tomografia/prot-cirur-guiada/prot-cirur-guiada.component';
import { ServicosListaReqComponent } from './servicos/Servicos-Lista-Req/servicos-lista-req.component';
import { ImplanteComponent } from './servico-detail/tomografia/implante/implante.component';
import { PeriodontiaComponent } from './servico-detail/tomografia/periodontia/periodontia.component';
import { OutrasFinalidadesComponent } from './servico-detail/tomografia/outras-finalidades/outras-finalidades.component';
import { AtmComponent } from './servico-detail/tomografia/atm/atm.component';
import { TcFaceComponent } from './servico-detail/tomografia/tc-face/tc-face.component';
import { DocumentacaoDigitalComponent } from './servico-detail/tomografia/documentacaodigital/documentacaodigital.component';
import { PrototipagemComponent } from './servico-detail/tomografia/prototipagem/prototipagem.component';

import { OdontogramaComponent } from './servico-detail/odontograma/odontograma.component';

import { TomografiaComponent } from './servico-detail/tomografia/tomografia.component';
import { ExamCartComponent } from './servico-detail/exam-cart/exam-cart.component'

import { OrderSummaryComponent } from './order-summary/order-summary.component';


import { ExamTcComponent } from './servico-detail/exam-cart/exam-tc/exam-tc.component';
import { RadiologiaComponent } from './servico-detail/radiologia/radiologia.component';
import { RadOdontogramaComponent } from './servico-detail/radiologia/rad-odontograma/rad-odontograma.component';
import { EscaneamentoIntraoralComponent } from './servico-detail/escaneamento-intraoral/escaneamento-intraoral.component';
import { DocOrtodonticasComponent } from './servico-detail/doc-ortodonticas/doc-ortodonticas.component';
import { ExamEscaneamentoIntraoralComponent } from './servico-detail/exam-cart/exam-escaneamento-intraoral/exam-escaneamento-intraoral.component';
import { DocumentacoesComponent } from './servico-detail/doc-ortodonticas/documentacoes/documentacoes.component';
import { FotosIntraoraisComponent } from './servico-detail/radiologia/fotos-intraorais/fotos-intraorais.component';
import { FotosExtraoraisComponent } from './servico-detail/radiologia/fotos-extraorais/fotos-extraorais.component';
import { RadiografiaExtraoraisComponent } from './servico-detail/radiologia/radiografia-extraorais/radiografia-extraorais.component';
import { ModelogessoComponent } from './servico-detail/radiologia/modelogesso/modelogesso.component';
import { RadiografiaIntraoraisComponent } from './servico-detail/radiologia/radiografia-intraorais/radiografia-intraorais.component';
import { ExamDocumentacoesComponent } from './servico-detail/exam-cart/exam-documentacoes/exam-documentacoes.component';
import { ExamRadiologiaComponent } from './servico-detail/exam-cart/exam-radiologia/exam-radiologia.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    PedidoExameComponent,
    ServicosComponent,
    ServicoComponent,
    ServicoDetailComponent,
    ProtCirurGuiadaComponent,
    ServicosListaReqComponent,
    ImplanteComponent,
    PeriodontiaComponent,
    OutrasFinalidadesComponent,
    AtmComponent,
    TcFaceComponent,
    DocumentacaoDigitalComponent,
    PrototipagemComponent,
    OdontogramaComponent,
    TomografiaComponent,
    ExamCartComponent,
    ExamTcComponent,
    RadiologiaComponent,
    RadOdontogramaComponent,
    EscaneamentoIntraoralComponent,
    DocOrtodonticasComponent,
    ExamEscaneamentoIntraoralComponent,
    DocumentacoesComponent,
    FotosIntraoraisComponent,
    FotosExtraoraisComponent,
    RadiografiaExtraoraisComponent,
    ModelogessoComponent,
    RadiografiaIntraoraisComponent,
    ExamDocumentacoesComponent,
    ExamRadiologiaComponent,
    LegalComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: AppCustomPreloader } )
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler},
              AppCustomPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
