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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MouseDirective } from './mouse.directive';
import { CustomThemeDirective } from './custom-theme.directive';
import { RegisterComponent } from './register/register.component';
import { ParalinkComponent } from './paralink/paralink.component';
import { ParalinkPipe } from './paralink.pipe';
import { InfinitescrollComponent } from './infinitescroll/infinitescroll.component';
import { ParentComponent } from './ngrx/parent/parent.component';
import { ChildComponent } from './ngrx/child/child.component';
import { Example2Component } from './rxjs/example2/example2.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { DoubleclickComponent } from './doubleclick/doubleclick.component';
import { Opr2Component } from './rxjs/opr2/opr2.component';
import { TdfformsComponent } from './tdfforms/tdfforms.component';
import { ReactieformComponent } from './reactieform/reactieform.component';
import { CassixtemplateComponent } from './cassixtemplate/cassixtemplate.component';
import { QuetionPaperComponent } from './quetion-paper/quetion-paper.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ConcatComponent } from './rxjs/concat/concat.component';

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
    CustomThemeDirective,
    RegisterComponent,
    ParalinkComponent,
    ParalinkPipe,
    InfinitescrollComponent,
    ParentComponent,
    ChildComponent,
    Example2Component,
    OperatorsComponent,
    DoubleclickComponent,
    Opr2Component,
    TdfformsComponent,
    ReactieformComponent,
    CassixtemplateComponent,
    QuetionPaperComponent,
    LifecyclehooksComponent,
    ConcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
