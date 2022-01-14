import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full',
  },
  {
    path: 'people',
    loadChildren: async () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
