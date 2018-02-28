import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { PostModalDetailComponent } from './post/post-modal-detail/post-modal-detail.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    PostModule,
    HomeModule
  ],
  providers: [
    UserService,
    PostService
  ],
  entryComponents: [
    PostModalDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
