import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FeatureModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
