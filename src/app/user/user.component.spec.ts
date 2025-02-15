import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { of } from 'rxjs';
import { UserService } from '../user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockuserservice: any;

  beforeEach(() => {

    mockuserservice = jasmine.createSpyObj(['getUser'])
    mockuserservice.getUser.and.returnValue(of({ name: 'suma' }))

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useValue: mockuserservice }]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display user name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('suma')
  });
});
