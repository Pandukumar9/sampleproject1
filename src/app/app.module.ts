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
import { SwitchmapComponent } from './rxjs/switchmap/switchmap.component';
import { ChipsComponent } from './material/chips/chips.component';
import { ProjectsComponent } from './eportfolio/projects/projects.component';
import { DraftsComponent } from './eportfolio/drafts/drafts.component';
import { HomepageComponent } from './eportfolio/homepage/homepage.component';
import { TdfformComponent } from './forms/tdfform/tdfform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { MaterialuiformComponent } from './forms/materialuiform/materialuiform.component';
import { PopupComponent } from './material/popup/popup.component';
import { DialogformComponent } from './popup/dialogform/dialogform.component';
import { SingupComponent } from './admin/singup/singup.component';
import { SinginComponent } from './admin/singin/singin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { CompanyComponent } from './task/company/company.component';
import { IntershipComponent } from './task/intership/intership.component';
import { NavbarComponent } from './task/navbar/navbar.component';
import { EmployeeComponent } from './task/task2/employee/employee.component';
import { StudentComponent } from './task/task2/student/student.component';
import { DialogComponent } from './dialogpop/dialog/dialog.component';
import { Homepage1Component } from './dialogpop/homepage1/homepage1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireModule } from '@angular/fire';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CreateEmployeComponent } from './employ/create-employe/create-employe.component';
import { ListEmployeComponent } from './employ/list-employe/list-employe.component';


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
    ConcatComponent,
    SwitchmapComponent,
    ChipsComponent,
    ProjectsComponent,
    DraftsComponent,
    HomepageComponent,
    TdfformComponent,
    ReactiveformComponent,
    MaterialuiformComponent,
    PopupComponent,
    DialogformComponent,
    SingupComponent,
    SinginComponent,
    DashboardComponent,
    HomeComponent,
    CompanyComponent,
    IntershipComponent,
    NavbarComponent,
    EmployeeComponent,
    StudentComponent,
    DialogComponent,
    Homepage1Component,
    CreateEmployeComponent,
    ListEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    // AngularFireModule,
    // AngularFireDatabaseModule
    MatInputModule,
    MatFormFieldModule
    
   ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
