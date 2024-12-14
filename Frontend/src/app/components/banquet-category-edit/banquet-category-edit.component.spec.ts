import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetCategoryEditComponent } from './banquet-category-edit.component';

describe('BanquetCategoryEditComponent', () => {
  let component: BanquetCategoryEditComponent;
  let fixture: ComponentFixture<BanquetCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetCategoryEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
