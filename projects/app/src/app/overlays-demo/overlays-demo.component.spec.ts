import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaysDemoComponent } from './overlays-demo.component';

describe('OverlaysDemoComponent', () => {
  let component: OverlaysDemoComponent;
  let fixture: ComponentFixture<OverlaysDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaysDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaysDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
