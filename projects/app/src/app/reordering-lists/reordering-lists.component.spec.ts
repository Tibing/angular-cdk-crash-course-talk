import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderingListsComponent } from './reordering-lists.component';

describe('ReorderingListsComponent', () => {
  let component: ReorderingListsComponent;
  let fixture: ComponentFixture<ReorderingListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderingListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
