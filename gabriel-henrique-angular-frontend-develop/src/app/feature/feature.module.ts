import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ViewComponent } from './person/view/view.component';
import { PersonModule } from './person/person.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    PersonModule
  ],
  exports: [ViewComponent]

})
export class FeatureModule { }
