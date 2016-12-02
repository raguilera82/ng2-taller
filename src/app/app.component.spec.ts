import { SearchUserServiceMock } from './search-user/search-user.service.mock';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchUserService } from './search-user/search-user.service';
import { HttpModule } from '@angular/http';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'; 

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: SearchUserService, useClass: SearchUserServiceMock}
        ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
