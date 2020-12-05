import { Injectable } from '@angular/core';
import {FileType} from "../../models/file-type";
import {HttpClient} from "@angular/common/http";
import {FileState} from "../../models/file-state";

@Injectable({
  providedIn: 'root'
})
export class FileStateService {
  baseUrl = '';
  fileStates: FileState [] = [];
  constructor(private http: HttpClient) {
    this.fileStates = [
      {
        id: 1,
        title: 'Employment contract'
      },
      {
        id: 2,
        title: 'Inless cerficate'
      }]
  }
  getAll(): Promise<any> {
    return Promise.resolve(this.fileStates);
  }
  add(data): Promise<boolean> {
    this.fileStates.push(data);
    return Promise.resolve(true);
  }
  edit(data): Promise<boolean> {
    this.fileStates.forEach(value => {
      if (value.id === data.id){
        value.title = data.title;
        value.description = data.description;
      }
    });
    return Promise.resolve(true);
  }
  delete(id): Promise<boolean> {
    this.fileStates.forEach((value, index) => {
      if (value.id === id){
        this.fileStates.splice(index, 1);
      }
    });
    return Promise.resolve(true);
  }
}
