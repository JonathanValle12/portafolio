import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [

    { path: "", component: InicioComponent},
    { path: "**", component: ErrorComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
