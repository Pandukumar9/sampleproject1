import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SampleService } from './services/sample.service';
import { MealslistComponent } from './mealslist/mealslist.component';
import { MealsComponent } from './meals/meals.component';
import { CustampipePipe } from './custampipe.pipe';
import { CustamdirectiveDirective } from './custamdirective.directive';
@NgModule({
  declarations: [
    AppComponent,
    MealslistComponent,
    MealsComponent,
    CustampipePipe,
    CustamdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
