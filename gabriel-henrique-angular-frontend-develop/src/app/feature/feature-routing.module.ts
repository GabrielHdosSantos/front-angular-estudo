import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from '../core/guards/permission.guard';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { FormComponent } from './animals/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full',
  },
  {
    path: 'animals',
    loadChildren: async () =>
      import('./animals/animals.module').then((m) => m.AnimalsModule),
      component: FormComponent
  },
  {
    path: 'people',
    canActivate: [
      PermissionGuard
    ],
    loadChildren: async () =>
      import('./person/person.module').then((m) => m.PersonModule),

  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
