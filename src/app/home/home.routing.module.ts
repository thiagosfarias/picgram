import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';

import { HomeComponent } from './hom.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                  title: 'Sign In'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                  title: 'Sign Up'
                }
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

