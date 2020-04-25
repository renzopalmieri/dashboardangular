import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    AppRoutingModule,
    PagesModule,
    FormsModule
  ],
  exports : [

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
