import { AdminPipe } from './../admin/admin.pipe';
import { SearchUserService } from './search-user.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchUserComponent } from './search-user.component';
import { SearchUserServiceMock } from './search-user.service.mock';
import { User } from '../model/user';
import { ShowUserComponent } from '../show-user/show-user.component';

describe('SearchUserComponent', () => {
  let app: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUserComponent],
      providers: [
        { provide: SearchUserService, useClass: SearchUserServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Search User');
  }));

  it('should get user', () => {
    const USERNAME = 'raguilera82';
    app.search(USERNAME);
    expect(app.user.login).toEqual(USERNAME);
  });

  it('should get error', () => {
    const USERNAME = 'raguilera82error';
    app.search(USERNAME);
    expect(app.error).toBeDefined();
  });

  it('should user selected', () => {
    let user: User = new User('raguilera82', 'Rubén Aguilera', 'Autentia', 121212, 'http://', true);
    app.userSelected(user);
  });

  it('should emit selected event', async(() => {
    let child = new ShowUserComponent();
    child.user = new User('raguilera82', 'Ruben Aguilera', 'Autentia', 121212, 'http://', true);
    child.selected.subscribe(g => {
      expect(g.login).toEqual(child.user.login);
    });
    child.onClick();
  }));
});
