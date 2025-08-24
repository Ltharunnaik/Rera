import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeshUnregisterd } from './help-desh-unregisterd';

describe('HelpDeshUnregisterd', () => {
  let component: HelpDeshUnregisterd;
  let fixture: ComponentFixture<HelpDeshUnregisterd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDeshUnregisterd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDeshUnregisterd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
