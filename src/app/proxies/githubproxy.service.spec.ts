/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubproxyService } from './githubproxy.service';
import { HttpModule } from '@angular/http';

describe('GithubproxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GithubproxyService]
    });
  });

  it('should get info', async(inject([GithubproxyService], (service: GithubproxyService) => {
    expect(service).toBeTruthy();
    const USERNAME = 'raguilera82';
    service.search(USERNAME).subscribe(
      (info) => expect(info.json().login).toEqual(USERNAME)
    );
  })));
});
