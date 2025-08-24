import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactlogin } from './contactlogin';

describe('Contactlogin', () => {
  let component: Contactlogin;
  let fixture: ComponentFixture<Contactlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
