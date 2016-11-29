import { GithubproxyService } from './proxies/githubproxy.service';
import { SearchUserService } from './search-user/search-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchUserService, GithubproxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
