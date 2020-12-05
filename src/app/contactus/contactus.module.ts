import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contactus.routing';
import { ContactusComponent } from './contactus.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';
import { AppCommonModule } from '../app.common.module';
import {HeaderBreadCrumbModule} from "../layout/header-breadcrumb/header-breadcrumb.module";

@NgModule({
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        AppCommonModule,
        HeaderBreadCrumbModule
    ],
  declarations: [
    ContactusComponent,
    ContactUsMailDialogComponent
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class ContactUsModule { }
