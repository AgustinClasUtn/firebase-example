import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithAuthComponent } from './register-with-auth.component';

describe('RegisterWithAuthComponent', () => {
  let component: RegisterWithAuthComponent;
  let fixture: ComponentFixture<RegisterWithAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWithAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterWithAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
