import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KReat } from './k-reat';

describe('KReat', () => {
  let component: KReat;
  let fixture: ComponentFixture<KReat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KReat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KReat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
