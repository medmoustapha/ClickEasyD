import { Component, OnInit } from '@angular/core';
import {FileService} from "../../../../core/services/files/file.service";
import {Employee} from "../../../../core/models/employee.model";
import {MessageService} from "primeng/api";
import {FileTypeService} from "../../../../core/services/FileType/file-type.service";
import {FileType} from "../../../../core/models/file-type";

@Component({
  selector: 'app-file-main',
  templateUrl: './file-main.component.html',
  styleUrls: ['./file-main.component.css']
})
export class FileMainComponent implements OnInit {
 cols = [
   {field: 'title', header: 'Designation'},
   {field: 'description', header: 'Description'},
   {field: 'state', header: 'state'},
   {field: 'type', header: 'Type'},
   {field: 'action', header: 'Actions'},
 ];
 files: any[] = [];
 User: Employee = JSON.parse(sessionStorage.getItem('currentUser'));
 file = ''
  typeFiles: FileType[] = []
  constructor(private fileService: FileService, private messageService: MessageService,
              private fileTypeService: FileTypeService) { }

  ngOnInit() {
    this.getFileByUser();
    this.typeFiles = this.fileTypeService.fileTypes;
  }
  getFileByUser(){
  this.fileService.getByEmployee(this.User.id).then(resp =>{
    this.files = resp;
  })
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

  donwloadFile(url: any) {
   this.file = url;
    this.messageService.add({key: 'c', sticky: false, severity:'warn', detail:'Do you want to download this file?'});
   // window.open(url);
  }
  donwload(){
    this.messageService.clear('c');
    console.log(typeof(this.file))

  }
  onReject() {
    this.messageService.clear('c');
    this.file= '';
  }
}
