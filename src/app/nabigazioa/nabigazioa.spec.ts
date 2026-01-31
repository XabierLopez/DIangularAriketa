import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nabigazioa } from './nabigazioa';

describe('Nabigazioa', () => {
  let component: Nabigazioa;
  let fixture: ComponentFixture<Nabigazioa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nabigazioa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nabigazioa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
