import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


export const pages: Routes = [
  {path: '', component: PagesComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent, data: {titulo: 'dashboard'}},
    {path: 'graficas1', component: Graficas1Component,data: {titulo: 'graficas'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'promesas'}},
    {path: 'progress', component: ProgressComponent, data: {titulo: 'progress'}},
    {path: 'rxjs', component: RxjsComponent, data: {titulo: 'rxjs'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'ajustes'}},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(pages, {useHash: true})],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

