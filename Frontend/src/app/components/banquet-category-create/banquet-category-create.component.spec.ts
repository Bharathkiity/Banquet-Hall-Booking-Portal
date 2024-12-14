import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetCategoryCreateComponent } from './banquet-category-create.component';

describe('BanquetCategoryCreateComponent', () => {
  let component: BanquetCategoryCreateComponent;
  let fixture: ComponentFixture<BanquetCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetCategoryCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
