import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {EmployeeDataService} from "../../Modules/employees/employee-data.service";
import {Employee} from "../models/employee.model";

@Injectable()
/**
 * user service class
 */
export class UserDataService {

  users: Employee[] = [];

  constructor(private employeeDataService: EmployeeDataService) {
    let user = {
      userId: 1,
      userName: "admin",
      password: "admin",
      emailId: "admin@admin.com",
      birthDate: new Date('10/28/1992'),
      role: {id: 1, libelle: 'Employee'}
    };
    this.users = employeeDataService.employees;
  }

  /**
   * get user by user name and password
   * @param userName
   * @param password
   */
  getUserByUserNameAndPassword(userName: string, password: string): Promise<Employee> {
    let user: Employee = null;
    this.users.forEach(element => {
      if (element.login === userName && element.password === password) {
        user = element;
      }
    });
    return Promise.resolve(user);
  }

  /**
   * add new user
   * @param userName
   * @param password
   * @param emailId
   * @param birthDate
   */
  addUser(userName: string, password: string, emailId: string, birthDate: Date): boolean {
    let userId = this.users.length + 1;
    let user = new Employee();
    user.id = userId;
    user.login = userName;
    user.password = password;
    user.address = emailId;
    user.birthDate = birthDate;
    this.users.push(user);
    return true;
  }
}
