import {Injectable} from '@angular/core';

@Injectable()
/**
 * menu data service
 */
export class MenuDataService {
  user = JSON.parse(sessionStorage.getItem('currentUser'));
  getMenuList() {
    if (this.user.role !== 'Employee'){
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
}
