import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { Error404Component } from './core/error404/error404.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

const AppRoutes: Routes = [
  { path: '', component: HomeComponent,  data: { title: 'App home' }},
  { path: 'users', component: UserListComponent, data: { title: 'User List' }},
  { path: 'users/:id', component: UserDetailComponent, data: { title: 'User Details' }},
  { path: 'profile/:id', component: UserProfileComponent, data: { title: 'User Profile' }},
  { path: 'error-404', component: Error404Component, data: { title: 'Not found' }},

  { path: '**', redirectTo: '/error-404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
