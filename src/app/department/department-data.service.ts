import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDataService {

    departments: any[];

    constructor() {
        this.departments = [
            { Id: 1, Name: ".net", Description: ".Net" },
            { Id: 2, Name: "HR", Description: "HR" },
            { Id: 3, Name: "Admin", Description: "Admin" },
            { Id: 4, Name: "PHP", Description: "PHP" },
            { Id: 5, Name: "Angular", Description: "Angular 9" },
            { Id: 6, Name: "Flutter", Description: "Flutter" },
            { Id: 7, Name: "Java", Description: "Spring boot" }
            ];
    }

    getAllDepartments() {
        return this.departments;
    }

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.Id === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {
        var data;
        this.departments.forEach(element => {
            if (element.Name === name) {
                data = element;
            }
        });
        return data;
    }
}
