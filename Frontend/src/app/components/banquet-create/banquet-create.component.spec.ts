import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetCreateComponent } from './banquet-create.component';

describe('BanquetCreateComponent', () => {
  let component: BanquetCreateComponent;
  let fixture: ComponentFixture<BanquetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanquetCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanquetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
