/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchUserService } from './search-user.service';
import { HttpModule } from '@angular/http';
import { GithubproxyService } from '../proxies/githubproxy.service';

describe('SearchUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SearchUserService, GithubproxyService]
    });
  });

  it('should get User', async(inject([SearchUserService], (service: SearchUserService) => {
    expect(service).toBeTruthy();
    const USERNAME = 'raguilera82';
    service.search(USERNAME).subscribe(
      user => expect(user.login).toEqual(USERNAME)
    );
  })));
});
