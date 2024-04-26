import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithAuthComponent } from './login-with-auth.component';

describe('LoginWithAuthComponent', () => {
  let component: LoginWithAuthComponent;
  let fixture: ComponentFixture<LoginWithAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWithAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
