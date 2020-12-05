import { Component, OnInit } from '@angular/core';
import {FileService} from "../../../core/services/files/file.service";
import {FileTypeService} from "../../../core/services/FileType/file-type.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../core/models/employee.model";

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  fileTypes = [];
  form: FormGroup;
  user: Employee = JSON.parse(sessionStorage.getItem('currentUser'));
  constructor(private fileService: FileService,
              private fileTypeService: FileTypeService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.fileTypeService.getAll().then(resp => {
      this.fileTypes = resp.map(obj => {
        return {
          value: obj.id,
          label: obj.title
        }
      });
      /*this.fileTypes.splice(0,0, {id: '', label: 'Empty'});*/
    })
  }
  initForm(){
    this.form = this.formBuilder.group({
      id: this.fileService.files.length + 1,
      title: [''],
      type: ['', Validators.required],
      employee: [this.user.id, Validators.required],
      state: ['Waiting'],
      file: [''],
      description: [''],
    })
  }

  onSubmit() {
   this.fileService.add(this.form.value).then(resp => {
     if(resp){
       this.initForm();
     }
   })
  }

  onClose() {

  }
}
