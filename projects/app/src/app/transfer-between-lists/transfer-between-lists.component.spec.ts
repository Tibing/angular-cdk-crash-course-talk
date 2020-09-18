import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBetweenListsComponent } from './transfer-between-lists.component';

describe('TransferBetweenListsComponent', () => {
  let component: TransferBetweenListsComponent;
  let fixture: ComponentFixture<TransferBetweenListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBetweenListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBetweenListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
