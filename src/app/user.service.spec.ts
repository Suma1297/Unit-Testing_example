import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return user data', () => {
    service.getUser().subscribe(user => {
      expect(user).toEqual({ id: 1, name: 'suma', emailid: 'suma@gmail.com' });
    });
  });
});
