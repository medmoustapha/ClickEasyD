import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./Modules/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'departments',
            loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'employees',
            loadChildren: () => import('./Modules/employees/employees.module').then(m => m.EmployeesModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'aboutus',
            loadChildren: () => import('./Modules/aboutus/aboutus.module').then(m => m.AboutUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'contactus',
            loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'files',
            loadChildren: () => import('./Modules/file/file.module').then(m => m.FileModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'files/create-request',
            loadChildren: () => import('./Modules/file/file.module').then(m => m.FileModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'files/valid-request',
            loadChildren: () => import('./Modules/file/file.module').then(m => m.FileModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
