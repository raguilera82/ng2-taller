/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubproxyService } from './githubproxy.service';
import { XHRBackend, Http, Response, ResponseOptions, ConnectionBackend, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('GithubproxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GithubproxyService,
      {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  beforeEach(async(() => {
  let backend = TestBed.get(XHRBackend);
  let service = new GithubproxyService(TestBed.get(Http));
  let fakeUsers = `{
  "login": "raguilera82",
  "id": 818068,
  "avatar_url": "https://avatars.githubusercontent.com/u/818068?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/raguilera82",
  "html_url": "https://github.com/raguilera82",
  "followers_url": "https://api.github.com/users/raguilera82/followers",
  "following_url": "https://api.github.com/users/raguilera82/following{/other_user}",
  "gists_url": "https://api.github.com/users/raguilera82/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/raguilera82/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/raguilera82/subscriptions",
  "organizations_url": "https://api.github.com/users/raguilera82/orgs",
  "repos_url": "https://api.github.com/users/raguilera82/repos",
  "events_url": "https://api.github.com/users/raguilera82/events{/privacy}",
  "received_events_url": "https://api.github.com/users/raguilera82/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Rubén Aguilera Díaz-Heredero",
  "company": "Autentia",
  "blog": "http://www.adictosaltrabajo.com",
  "location": "San Fernando de Henares",
  "email": "raguilera@autentia.com",
  "hireable": null,
  "bio": null,
  "public_repos": 29,
  "public_gists": 2,
  "followers": 15,
  "following": 0,
  "created_at": "2011-05-30T06:27:46Z",
  "updated_at": "2016-11-09T19:56:20Z"
  }`;
    let options = new ResponseOptions({body: fakeUsers});
   let response = new Response(options);
  backend.connections.subscribe(
   (c: MockConnection) => c.mockRespond(response)
  );
  }));

  it('should get info', inject([GithubproxyService], (service: GithubproxyService) => {
    expect(service).toBeTruthy();
    const USERNAME = 'raguilera82';
    service.search(USERNAME).subscribe(
      (info) => expect(info.json().login).toEqual(USERNAME)
    );
  }));
});
