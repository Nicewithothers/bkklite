import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlineComponent } from './addline.component';

describe('AddlineComponent', () => {
  let component: AddlineComponent;
  let fixture: ComponentFixture<AddlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
