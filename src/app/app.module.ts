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
import { ListUsersComponent } from './list-users/list-users.component';

const ROUTES: Routes = [
  {path: 'detail/:username', component: ShowUserComponent},
  {path: 'search', component: SearchUserComponent},
  {path: 'searchAll', component: ListUsersComponent},
  {path: '', redirectTo: 'searchAll', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    AdminPipe,
    SearchUserComponent,
    ListUsersComponent
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
