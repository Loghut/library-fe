import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanreListComponent } from './zanre-list.component';

describe('ZanreListComponent', () => {
  let component: ZanreListComponent;
  let fixture: ComponentFixture<ZanreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZanreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
