import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file/file.component';
import { FileMainComponent } from './Components/file-main/file-main.component';
import {HeaderBreadCrumbModule} from "../../layout/header-breadcrumb/header-breadcrumb.module";
import {PanelModule} from "primeng/panel";
import {TranslateModule} from "@ngx-translate/core";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { AddFileComponent } from './add-file/add-file.component';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import { ValidFileComponent } from './Components/valid-file/valid-file.component';
import {DataViewModule} from "primeng/dataview";
import {
  ConfirmationService,
  ConfirmDialogModule,
  DropdownModule,
  FileUploadModule,
  RatingModule
} from "primeng/primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [FileComponent, FileMainComponent, AddFileComponent, ValidFileComponent],
  imports: [
    CommonModule,
    FileRoutingModule,
    HeaderBreadCrumbModule,
    PanelModule,
    TranslateModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    FileUploadModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class FileModule { }
