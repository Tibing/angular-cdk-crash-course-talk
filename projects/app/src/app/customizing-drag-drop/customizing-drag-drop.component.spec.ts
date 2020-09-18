import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizingDragDropComponent } from './customizing-drag-drop.component';

describe('CustomizingDragDropComponent', () => {
  let component: CustomizingDragDropComponent;
  let fixture: ComponentFixture<CustomizingDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizingDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizingDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
