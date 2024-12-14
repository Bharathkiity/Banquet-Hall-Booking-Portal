import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banquet } from '../../common/banquet';
import { BanquetCategory } from '../../common/banquet-category';
import { BanquetCategoryService } from '../../service/banquet-category.service';
import { BanquetService } from '../../service/banquet.service';

@Component({
  selector: 'app-banquet-create',
  standalone: false,
  
  templateUrl: './banquet-create.component.html',
  styleUrl: './banquet-create.component.css'
})
export class BanquetCreateComponent {
    
banquetFormGroup:FormGroup
banquetCatgories:BanquetCategory[]=[]

constructor(
private formBuilder: FormBuilder,
private banquetService:BanquetService,
private banquetCategoryService:BanquetCategoryService,
private router: Router
){}

ngOnInit() {
  this.banquetFormGroup = this.formBuilder.group({
    banquet: this.formBuilder.group({
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      mobile: ['', [Validators.required ]],
      capacity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      event: ['', [Validators.required]],
      category: ['', [Validators.required]]
    }),
  });

  this.listBanquetCategories();
}

get description() {
  return this.banquetFormGroup.get('banquet.description');
}
get location() {
  return this.banquetFormGroup.get('banquet.location');
}
get mobile() {
  return this.banquetFormGroup.get('banquet.mobile');
}
get capacity() {
  return this.banquetFormGroup.get('banquet.capacity');

}
get price() {
  return this.banquetFormGroup.get('banquet.price')
}
get event() {
  return this.banquetFormGroup.get('banquet.event')
}
get category() {
  return this.banquetFormGroup.get('banquet.category')
}

listBanquetCategories() {
  this.banquetCategoryService.getBanquetCategoryList().subscribe((data) => {
    this.banquetCatgories = data;
    console.log(data);
  });
}

onSubmit() {
  if (this.banquetFormGroup.invalid) {
    this.banquetFormGroup.markAllAsTouched();
    alert("InValid Form")
    return;
  }

  //if form is valid
  let banquet = new Banquet();
  banquet = this.banquetFormGroup.controls['banquet'].value

  this.banquetService.
  createBanquetHalls(banquet.category.id, banquet)
    .subscribe((data) => {
      alert('New banquetHall is added!');
      this.router.navigateByUrl('/banquet-list');
    });
}
}
