import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RouteStateService} from "../../../../core/services/route-state.service";
import {EmployeeDataService} from "../../employee-data.service";
import {DynamicDialogRef} from "primeng/api";
import {DepartmentDataService} from "../../../../department/department-data.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  displayDialog = true;
  car: any;
  roles: any[] = [{
    id: "1",
    label: "Administrtor"
  },{
    id: "2",
    label: "HR Manager"
  },{
    id: "2",
    label: "Employee"
  }];
  departement = [];

  constructor(private formBuilder: FormBuilder, private dialogRef: DynamicDialogRef,
              private snackBar: MatSnackBar,private departmentDataService: DepartmentDataService,
              private employeeService: EmployeeDataService) {
  }

  ngOnInit() {
    this.departement = this.departmentDataService.getAllDepartments().map(obj => {
      return {
        id: obj,
        label: obj.Name
      };
    });
    this.addForm = this.formBuilder.group({
      id: this.employeeService.employees.length + 1,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      cin: ['', [Validators.required, Validators.maxLength(8),
                 Validators.minLength(8)]],
      password: ['', Validators.required],
      adress: [''],
      phone: [''],
      cnssNumber: [''],
      cardNumber: [''],
      mail: [''],
      role: ['', Validators.required],
      departmentID: ['', Validators.required],
      birthDate: [new Date()],
    })
  }

  onClose() {
    this.dialogRef.close(false)
  }

  save() {
    console.log(this.addForm.value);
    this.employeeService.add(this.addForm.value).then(resp => {
      this.dialogRef.close(true)
    });

  }
}
