import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {File} from "../../models/file";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  files: File[] = []
  constructor(private http: HttpClient) {
    this.files =[
      {
        id: 1,
        title: 'Employment contract',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 1,
      },
      {
        id: 2,
        title: 'Inless cerficate',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 2,
      },
      {
        id: 3,
        title: 'Employment contract',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 1,
      },
      {
        id: 4,
        title: 'Inless cerficate',
        state: 'Waiting',
        type: 2,
        file: '',
        employee: 3,
      },
      {
        id: 5,
        title: 'Employment contract',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 3,
      },
      {
        id: 6,
        title: 'Employment contract',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 4,
      },
      {
        id: 7,
        title: 'Inless cerficate',
        state: 'Waiting',
        type: 1,
        file: '',
        employee: 4,
      }
    ]
  }
  getByEmployee(id): Promise<File[]> {
    let data = [];
    this.files.forEach(value => {
      if (value.employee === id){
        data.push(value);
      }
    });
    return Promise.resolve(data);
  }
  getAll(): Promise<any>{
    return Promise.resolve(this.files);
  }
  getRequestWainting(): Promise<any>{
    let data = [];
    this.files.forEach(value => {
      if (value.state=== 'Waiting'){
        data.push(value);
      }
    })
    return Promise.resolve(data);
  }
  add(data): Promise<File>{
    console.log(data);
    this.files.push({
      id: data.id,
      title: data.title,
      description: data.description,
      employee: data.employee,
      state: data.state,
      type: data.type.value,
      file:  data.file,
    });
    console.log(this.files);
    return Promise.resolve(new File());
  }
  validRequest(file): Promise<true>{
    this.files.forEach(e => {
     if (e.id == file.id){
       e.state = 'Valid';
       e.file = file.file;
     }
    })
    return Promise.resolve(true);
  }
  edit(): Promise<File>{
    return Promise.resolve(new File());
  }
  delete(): Promise<boolean>{
    return Promise.resolve(true);
  }
}
