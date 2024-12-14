import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BanquetCategory } from '../../common/banquet-category';
import { BanquetCategoryService } from '../../service/banquet-category.service';

@Component({
  selector: 'app-banquet-category-edit',
  standalone: false,
  
  templateUrl: './banquet-category-edit.component.html',
  styleUrl: './banquet-category-edit.component.css'
})
export class BanquetCategoryEditComponent {

categoryFormGroup: FormGroup

banquetCategory:BanquetCategory=new BanquetCategory();
id:number;

constructor(
  private formBuilder: FormBuilder,
  private BanquetCategoryService: BanquetCategoryService,
  private router: Router,
  private activatedRoute:ActivatedRoute

) { }
ngOnInit() {
  this.categoryFormGroup = this.formBuilder.group({
    category: this.formBuilder.group({
      categoryName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
    }),
  });

  //read id given in productcategoryEditComponet route
  this.id =this.activatedRoute.snapshot.params['id']
  this.BanquetCategoryService.getBanquetCategory(this.id).subscribe((data)=>{
    this.banquetCategory=data;
    console.log(this.banquetCategory);
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
  if(confirm('are you to update')){
    this.BanquetCategoryService
    .updateBanquetCategory(this.id,this.banquetCategory)
    .subscribe((data)=>{
    alert('banquet details are updated!')
    this.router.navigateByUrl('/banquet-category-list');
    });
  }
  

}}
