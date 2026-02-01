import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ekitaldiak } from './ekitaldiak';

describe('Ekitaldiak', () => {
  let component: Ekitaldiak;
  let fixture: ComponentFixture<Ekitaldiak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ekitaldiak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ekitaldiak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
