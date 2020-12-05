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
      role: 'HR Manager',
      cinNumber: '005990148',
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
      cinNumber: '003633489',
      departmentId: 5,
      address: 'Tunis, Sfax',
      birthDate: new Date()
    },
    {
      id: 3,
      name: 'Mariem ',
      login: 'mariem',
      password: 'mariem',
      role: 'admin',
      department: 'Flutter',
      departmentId: 6,
      address: 'Tunis, Sfax',
      birthDate: new Date(),
      cinNumber: '11111111',
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
      cinNumber: '00000000',
      birthDate: new Date()
    },
    {
      id: 5,
      name: 'Sassi saleh',
      login: 'sassi',
      password: 'sassi',
      role: 'Employee',
      department: 'Java',
      departmentId: 7,
      address: 'Tunis, Sfax',
      cinNumber: '000081960',
      birthDate: new Date()
    },
    {
      id: 6,
      name: 'Rabab Blaeich',
      login: 'Rabab',
      password: 'Rabab',
      role: 'Employee',
      department: 'HR Manager',
      departmentId: 2,
      address: 'Tunis, Sfax',
      cinNumber: '00000000',
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
        cinNumber: data.cin,
        cardNumber: data.cardNumber,
        cnssNumber: data.cnssNumber,
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
