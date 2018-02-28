import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/module/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostModule } from '../post/post.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    PostModule
  ],
  exports: [
    UserListComponent,
    UserDetailComponent,
    UserProfileComponent
  ],
})
export class UserModule { }
