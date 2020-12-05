import {Injectable} from '@angular/core';
import {Employee} from '../../core/models/employee.model';

@Injectable()
/**
 * employee service
 */
export class EmployeeDataService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Moustapha Ahmed',
      login: 'admin',
      password: 'admin',
      role: 'RH',
      department: 'Angular 9',
      departmentId: 5,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 2,
      name: 'Sidina jeylani',
      login: 'sidina',
      password: 'sidina',
      role: 'Employee',
      department: 'Angular 9',
      departmentId: 5,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 3,
      name: 'Mariem ',
      login: 'Mariem',
      password: 'Mariem',
      role: 'Employee',
      department: 'Flutter',
      departmentId: 6,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 4,
      name: 'Moualoud breihlie',
      login: 'Moualoud',
      password: 'Moualoud',
      role: 'Employee',
      department: 'Java',
      departmentId: 1,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 5,
      name: 'Sassi saleh',
      login: 'Sassi',
      password: 'Moustapha',
      role: 'Sassi',
      department: 'Java',
      departmentId: 7,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 6,
      name: 'Nilav5',
      login: 'Nilav5',
      password: 'Nilav5',
      role: 'Employee',
      department: 'HR',
      departmentId: 2,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    }
  ]

  getEmployeeList(): Employee[] {
    return this.employees;
  }

  add(data): Promise<any> {
    this.employees.push(
      {
        id: data.id,
        name: data.firstName,
        login: data.userName,
        password: data.password,
        role: data.role.label,
        department: data.departmentID.label,
        departmentId: data.departmentID.id,
        address: data.address,
        birthDate: data.birthDate
      }
    );
    return Promise.resolve(true);
  }
}
