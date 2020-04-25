import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';
import { PagesRoutingModule } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';



@NgModule({

  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],

  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports: [
    ShareModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule

  ]

})
export class PagesModule {}
