import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileComponent} from "./file/file.component";
import {AddFileComponent} from "./add-file/add-file.component";
import {ValidFileComponent} from "./Components/valid-file/valid-file.component";


const routes: Routes = [
  {
    path: '', component: FileComponent
  },
  {path: 'create-request', component: AddFileComponent},
  {path: 'valid-request', component: ValidFileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
