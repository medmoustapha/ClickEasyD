import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileType} from "../../models/file-type";

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {
   baseUrl = '';
   fileTypes: FileType [] = [];
  constructor(private http: HttpClient) {
    this.fileTypes = [
      {
      id: 1,
      title: 'Work certificate'
    },
      {
        id: 2,
        title: 'Salary sertificate(CNSS)'
      },
      {
        id: 3,
        title: 'Salary sertificate(Credit)'
      },
      {
        id: 4,
        title: 'incom tax sertificate'
      },
      {
        id: 5,
        title: 'certificate of non-beneficary credi'
      },
      {
        id: 6,
        title: 'Sodexo Card'
      },
      {
        id: 7,
        title: 'Identification Card'
      },
      {
        id: 8,
        title: 'Time keeping'
      }]
  }
  getAll(): Promise<any> {
    return Promise.resolve(this.fileTypes);
  }
  add(data): Promise<boolean> {
    this.fileTypes.push(data);
    return Promise.resolve(true);
  }
  edit(data): Promise<boolean> {
    this.fileTypes.forEach(value => {
      if (value.id === data.id){
        value.title = data.title;
        value.description = data.description;
      }
    });
    return Promise.resolve(true);
  }
  delete(id): Promise<boolean> {
    this.fileTypes.forEach((value, index) => {
      if (value.id === id){
        this.fileTypes.splice(index, 1);
      }
    });
    return Promise.resolve(true);
  }

}
