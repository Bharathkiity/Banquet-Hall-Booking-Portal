import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BanquetCategory } from '../../common/banquet-category';
import { BanquetCategoryService } from '../../service/banquet-category.service';

@Component({
  selector: 'app-banquet-category-list',
  standalone: false,
  
  templateUrl: './banquet-category-list.component.html',
  styleUrl: './banquet-category-list.component.css'
})
export class BanquetCategoryListComponent {
  banquetCategory:BanquetCategory[]=[];
  BanquetCategory:any;
  listBanquetCategories:any;

  constructor(private banquetcategoryservice: BanquetCategoryService,
    private router:Router) {}

  listBanquetCategory() {
    this.banquetcategoryservice.getBanquetCategoryList().subscribe((data) => {
      this.banquetCategory = data;
      console.log(data);
    });

}

ngOnInit(){
  this.listBanquetCategory();
}


removeCategory(id:number){
  if(confirm("Are you sure to delete?")){
    this.banquetcategoryservice
    .deleteBanquetCategory(id)
    .subscribe((data)=>{
      alert('Categories removed!');
      this.listBanquetCategory();
    });
  }
}
showBanquetCategoryEdit(id:number){
  this.router.navigate(['banquet-category-edit',id]);
}
}
