import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

//servicio
//Fin servicio


// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// Providers
import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RegisterComponent } from './components/register/register.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ObtenerlaboratoristaComponent } from './components/obtenerlaboratorista/obtenerlaboratorista.component';
import { ObtenerusuariosComponent } from './components/obtenerusuarios/obtenerusuarios.component';
import { NuevolaboratorioComponent } from './components/nuevolaboratorio/nuevolaboratorio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateComponent,
    AdminComponent,    
    LoginComponent, RegisterComponent, LaboratoristaComponent, ClienteComponent, ObtenerlaboratoristaComponent, ObtenerusuariosComponent, NuevolaboratorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // JWT
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    // Token interceptor
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
