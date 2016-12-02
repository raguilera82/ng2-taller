import { GithubproxyService } from './proxies/githubproxy.service';
import { SearchUserService } from './search-user/search-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { AdminPipe } from './admin/admin.pipe';
import { SearchUserComponent } from './search-user/search-user.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {path: 'search', component: SearchUserComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    AdminPipe,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SearchUserService, GithubproxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
