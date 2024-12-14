import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BanquetCategory } from '../../common/banquet-category';
import { BanquetCategoryService } from '../../service/banquet-category.service';

@Component({
  selector: 'app-banquet-category-create',
  standalone: false,
  
  templateUrl: './banquet-category-create.component.html',
  styleUrl: './banquet-category-create.component.css'
})
export class BanquetCategoryCreateComponent {
  
  categoryFormGroup: FormGroup
  category: string | number | null;

  constructor(
    private formBuilder: FormBuilder,
    private banquetCategoryService:BanquetCategoryService,
    private router:Router
    
  ){}

  ngOnInit() {
    this.categoryFormGroup=this.formBuilder.group({
      category:this.formBuilder.group({
        categoryName:['',[Validators.required,Validators.pattern('[a-zA-z]+')],
      ],
      }),
    });
  }

  get categoryName() {
    return this.categoryFormGroup.get("category.categoryName");
  }
  onSubmit() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      alert("Inavlid Form");
      return;
    }
    
    let banquetCategory = new BanquetCategory();
    banquetCategory = this.categoryFormGroup.controls['category'].value;

      this.banquetCategoryService
      .createBanquetCategory(banquetCategory)
      .subscribe((data) => {
        alert('New Category is added!');
        this.router.navigateByUrl('/banquet-category-list');
      });
  }

}
