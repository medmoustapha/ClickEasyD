import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { AppCommonModule } from '../../app.common.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { HeaderBreadCrumbModule } from '../../layout/header-breadcrumb/header-breadcrumb.module';
import {TranslateModule} from "@ngx-translate/core";
import { AddEmployeeComponent } from './Comonents/add-employee/add-employee.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/api";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    TranslateModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    DialogModule,
    DropdownModule,
  ],
  providers: [
    MatDialog,
    MatSnackBar,
    DialogService,
    DatePipe
  ],
  declarations: [
    EmployeesComponent,
    AddEmployeeComponent,
  ],
  entryComponents: [
    AddEmployeeComponent
  ]
})
export class EmployeesModule { }
