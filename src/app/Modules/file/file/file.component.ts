import {Component, forwardRef, OnInit, ViewChild} from '@angular/core';
import {FileMainComponent} from "../Components/file-main/file-main.component";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @ViewChild(forwardRef(() => FileMainComponent), {static: false}) tab: FileMainComponent
  constructor() { }

  ngOnInit() {
  }

  showDialogToAdd() {
  this.tab.getFileByUser()
  }
}
