import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteStateService } from '../../core/services/route-state.service';
import { EmployeeDataService } from './employee-data.service';
import { Employee } from '../../core/models/employee.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEmployeeComponent} from "./Comonents/add-employee/add-employee.component";
import {DialogService} from "primeng/api";
import {ContactUsMailDialogComponent} from "../../contactus/contact-us-mail-dialog/contact-us-mail-dialog.component";
import {ToastService} from "../../core/services/toast.service";
import {ApplicationStateService} from "../../core/services/application-state.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  columns: any[];

  employees: Employee[];

  pageSize: number;
  isMobileResolution: boolean = false;

  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private toastService: ToastService,
    private  datePipe: DatePipe,
    private applicationStateService: ApplicationStateService) { }

  ngOnInit() {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    this.pageSize = 10;

    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'login', header: 'login' },
      { field: 'login', header: 'Name' },
      { field: 'role', header: 'Type' },
      { field: 'department', header: 'Department' },
      { field: 'address', header: 'Address' },
      { field: 'birthDate', header: 'Birth day' }
    ];
    this.employees = this.employeeService.getEmployeeList();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }

  showDialogToAdd() {
    var width = this.isMobileResolution ? '80%' : '50%';
    const ref = this.dialogService.open(AddEmployeeComponent, {
      data: {
      },
      header: 'add Employee',
      width: width
    });

    ref.onClose.subscribe((success: boolean) => {
      if (success) {
        this.toastService.addSingle("success", "Mail send successfully", "");
      }
    });
   /* const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddEmployeeComponent, dialogConfig);
    let self = this;
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result.submitted == true) {
          this.employees = this.employeeService.getEmployeeList();
        }
      });*/
  }
}
