import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard'
import {LoginComponent} from './Components/login/login.component'
import { InicioMaestroComponent } from './Components/inicio-maestro/inicio-maestro.component';
import { InicioAlumnoComponent } from './Components/inicio-alumno/inicio-alumno.component';
import {GestionAsistenciaComponent} from './Components/gestion-asistencia/gestion-asistencia.component';
import {MiAsistenciaComponent} from './Components/mi-asistencia/mi-asistencia.component';
import {ModificarClaseComponent} from './Components/modificar-clase/modificar-clase.component';
import {NavComponent} from './Components/nav/nav.component';
import {PaseListaComponent} from './Components/pase-lista/pase-lista.component';
import {RegistrarAsistenciaComponent} from './Components/registrar-asistencia/registrar-asistencia.component';
import {ReportesComponent} from './Components/reportes/reportes.component';
import {ReportesAlumnosComponent} from './Components/reportes-alumnos/reportes-alumnos.component';
import {ReportesDiaComponent} from './Components/reportes-dia/reportes-dia.component';

const routes: Routes = [
{
  path:'',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'hubMaestro',
  component: InicioMaestroComponent
},
{
  path: 'hubAlumno',
  component: InicioAlumnoComponent
},
{
  path: 'Gasistencias',
  component: GestionAsistenciaComponent
},
{
  path: 'miasistencia',
  component: MiAsistenciaComponent
},
{
  path: 'modificarClase',
  component: ModificarClaseComponent
},
{
  path: 'nav',
  component: NavComponent
},
{
  path: 'paseLista',
  component: PaseListaComponent
},
{
  path: 'regAsist',
  component: RegistrarAsistenciaComponent
},
{
  path: 'reportes',
  component: ReportesComponent
},
{
  path: 'reporteAlum',
  component: ReportesAlumnosComponent
},
{
  path: 'reportesDia',
  component: ReportesDiaComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
