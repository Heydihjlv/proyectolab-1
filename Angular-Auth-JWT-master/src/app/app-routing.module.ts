import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ObtenerlaboratoristaComponent } from './components/obtenerlaboratorista/obtenerlaboratorista.component';
import { ObtenerusuariosComponent } from './components/obtenerusuarios/obtenerusuarios.component';
import { NuevolaboratorioComponent } from './components/nuevolaboratorio/nuevolaboratorio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent, canActivate:[RoleGuard], data: { expectedRole: 1 }  },
  { path: 'admin', component: AdminComponent,canActivate:[RoleGuard], data: { expectedRole: 3 } },
  { path: 'login', component: LoginComponent },
  { path: 'private', component: PrivateComponent },
  {path: 'laboratorista', component: LaboratoristaComponent, canActivate:[RoleGuard], data: { expectedRole: 2 } },
  {path: 'register', component: RegisterComponent},
  {path: 'oblaboratorista', component: ObtenerlaboratoristaComponent},
  {path: 'obusuario', component: ObtenerusuariosComponent},
  {path: 'newlab', component: NuevolaboratorioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
