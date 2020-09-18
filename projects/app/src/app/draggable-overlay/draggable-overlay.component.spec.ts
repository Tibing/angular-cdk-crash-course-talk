import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableOverlayComponent } from './draggable-overlay.component';

describe('DraggableOverlayComponent', () => {
  let component: DraggableOverlayComponent;
  let fixture: ComponentFixture<DraggableOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
