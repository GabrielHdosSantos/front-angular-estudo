import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './person/view/view.component';
import { PersonModule } from './person/person.module';
import { PersonRoutingModule } from './person/person-routing.module';
import { FeaturesRoutingModule } from './feature-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FeaturesRoutingModule,
    PersonModule
  ],
})
export class FeatureModule { }
