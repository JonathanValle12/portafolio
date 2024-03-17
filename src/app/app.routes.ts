import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [

    { path: "", component: InicioComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
