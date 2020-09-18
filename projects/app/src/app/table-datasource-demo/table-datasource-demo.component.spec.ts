import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatasourceDemoComponent } from './table-datasource-demo.component';

describe('TableDatasourceDemoComponent', () => {
  let component: TableDatasourceDemoComponent;
  let fixture: ComponentFixture<TableDatasourceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDatasourceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDatasourceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
