import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

export class SearchUserServiceMock {

  search(username: string): Observable<User> {
    if (username === 'raguilera82') {
      return Observable.of(new User('raguilera82', 'Rubén Aguilera', 'Autentia',
    121212, 'http://avatar.jpg', true));
    } else {
      return Observable.throw('Error!');
    }

  }

}
