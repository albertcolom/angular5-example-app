import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/module/shared.module';
import { PostListUserComponent} from './post-list-user/post-list-user.component';
import { PostModalDetailComponent } from './post-modal-detail/post-modal-detail.component';

@NgModule({
  declarations: [
    PostModalDetailComponent,
    PostListUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  exports: [
   PostModalDetailComponent,
    PostListUserComponent
  ],
})
export class PostModule { }
