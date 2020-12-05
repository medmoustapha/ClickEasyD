import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ToastService } from '../core/services/toast.service';
import { LoaderService } from '../core/services/loader.service';
import { MenuDataService } from '../core/services/menu-data.service';
import { CustomMenuItem } from '../core/models/menu-item.model';
import { Sidebar } from 'primeng/sidebar';
import { ApplicationStateService } from '../core/services/application-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, OnInit {

  menuItems: CustomMenuItem[];

  isMenuVisible: boolean;

  isMobileResolution: boolean = false;

  @ViewChild("menubar", { static: true }) menubar: Sidebar;

  user = JSON.parse(sessionStorage.getItem('currentUser'));
  constructor(private toastService: ToastService,
    private loaderService: LoaderService,
    private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService) {
  }
  getMenuList() {
    if (this.user.role !== 'Employee') {
      return [
        {
          Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Employees', Icon: 'fa-users', RouterLink: '/main/employees', Childs: null, IsChildVisible: false
        },
        {
          Label: 'Departments', Icon: 'fa-sitemap', RouterLink: '/main/departments', Childs: null, IsChildVisible: false
        },
        {
          Label: 'File', Icon: 'fa-file', RouterLink: null, Childs: [
            {Label: 'My files', RouterLink: '/main/files', Childs: null, IsChildVisible: false},
            {Label: 'Create request', RouterLink: '/main/files/create-request', Childs: null, IsChildVisible: false},
            {Label: 'Valid request', RouterLink: '/main/files/valid-request', Childs: null, IsChildVisible: false},
          ],
          IsChildVisible: true
        },
        {
          Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
        },
        {
          Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false
        }
      ];
    } else {
      return [
        {
          Label: 'File', Icon: 'fa-file', RouterLink: null, Childs: [
            {Label: 'My files', RouterLink: '/main/files', Childs: null, IsChildVisible: false},
            {Label: 'Create request', RouterLink: '/main/files/create-request', Childs: null, IsChildVisible: false},
          ],
          IsChildVisible: true
        },
        {
          Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
        },
        {
          Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false
        }
      ];
    }
  }

  ngOnInit() {
    this.loaderService.show();
    this.menuItems = this.getMenuList();
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    if (this.isMobileResolution) {
      this.isMenuVisible = false;
    }
    else {
      this.isMenuVisible = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible
  }

}
