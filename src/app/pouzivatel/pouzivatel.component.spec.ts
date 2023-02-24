import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouzivatelComponent } from './pouzivatel.component';

describe('PouzivatelComponent', () => {
  let component: PouzivatelComponent;
  let fixture: ComponentFixture<PouzivatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouzivatelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PouzivatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
