import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnimalsService } from 'src/app/core/animals/animals.service';
import { Animals } from 'src/app/core/animals/models/Animal';
import { ListComponent } from '../person/list/list.component';

@Injectable()
export class AnimalsDataResolver implements Resolve<any>{
  constructor(private animalsService:AnimalsService) {}

  resolve() {
    return this.animalsService.getAll();

  }
}

const routes: Routes = [
  {
  path: 'lista',
  component: ListComponent,
  resolve: {
    Animal: AnimalsDataResolver
  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
