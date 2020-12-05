import {Component, OnInit} from '@angular/core';
import {FileService} from "../../../../core/services/files/file.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {EmployeeDataService} from "../../../employees/employee-data.service";
import {Employee} from "../../../../core/models/employee.model";
import {FileType} from "../../../../core/models/file-type";
import {FileTypeService} from "../../../../core/services/FileType/file-type.service";

@Component({
  selector: 'app-valid-file',
  templateUrl: './valid-file.component.html',
  styleUrls: ['./valid-file.component.css']
})
export class ValidFileComponent implements OnInit {
  cols = [
    {field: 'title', header: 'Designation'},
    {field: 'description', header: 'Description'},
    {field: 'state', header: 'state'},
    {field: 'type', header: 'Type'},
    {field: 'action', header: 'Actions'},
  ];
  files: any[] = [];
  sortField = '';
  sortOrder = '';
  uploadedFiles: any[] = [];
  position = 'Top';
  employees = [];
  typeFiles: FileType[] = [];

  constructor(private fileService: FileService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private employeeDataService: EmployeeDataService,
              private fileTypeService: FileTypeService) {
  }

  ngOnInit() {
    this.getAll();
    this.typeFiles = this.fileTypeService.fileTypes;
    this.employees = this.employeeDataService.employees;
  }

  getType(id){
    let type = new FileType();
    this.typeFiles.forEach(value => {
      if (value.id === id){
        type = value;
        return
      }
    });
    return type.title;
  }

  getAll() {
    this.fileService.getRequestWainting().then(resp => {
      this.files = resp;
    })
  }
  getEmployee(id){
    let emp =  new Employee()
    this.employees.forEach(e => {
      if (e.id == id) {
        emp = e;
        return;
      }
    })
    return emp.name;
  }

  valid(product) {
    this.confirmationService.confirm({
      message: 'Are you sure to valid this request?',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      header: 'Valid request',
      accept: () => {
        if (product.file === ''){
          this.messageService.add({severity: 'error', summary: 'No file choose', detail: ''});
        } else{
          this.fileService.validRequest(product).then(resp => {
            this.getAll();
          });
        }
      }
    });
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onBasicUploadAuto($event: any, product) {
    console.log($event);
    console.log(this.uploadedFiles);
  }

  onSelectedFile(evt, product) {
    console.log(evt)
    var files = evt.target.files;
    var reader = new FileReader();
    let that = this;
    reader.onload = function (frEvent: any) {
      product.file = frEvent.target.result;
    };
    reader.readAsDataURL(files[0]);

  }

}
