import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetCategoryListComponent } from './banquet-category-list.component';

describe('BanquetCategoryListComponent', () => {
  let component: BanquetCategoryListComponent;
  let fixture: ComponentFixture<BanquetCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
