import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetListComponent } from './banquet-list.component';

describe('BanquetListComponent', () => {
  let component: BanquetListComponent;
  let fixture: ComponentFixture<BanquetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
