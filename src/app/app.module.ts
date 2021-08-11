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
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DynamiccolorComponent } from './dynamiccolor/dynamiccolor.component';
import { DynamiccolorDirective } from './dynamiccolor.directive';
import { FormsModule } from '@angular/forms';
import { MouseDirective } from './mouse.directive';
import { CustomThemeDirective } from './custom-theme.directive';
@NgModule({
  declarations: [
    AppComponent,
    MealslistComponent,
    MealsComponent,
    CustampipePipe,
    CustamdirectiveDirective,
    CreateEmployeeComponent,
    DynamiccolorComponent,
    DynamiccolorDirective,
    MouseDirective,
    CustomThemeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
