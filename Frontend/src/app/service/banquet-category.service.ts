 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BanquetCategory } from '../common/banquet-category';

@Injectable({
  providedIn: 'root'
})
export class BanquetCategoryService {
  
  /*
    http://localhost:8181/api/banquet-category
 */ 

  constructor(private http:HttpClient) { }

  
  getBanquetCategoryList() {
    const url = 'http://localhost:8181/api/banquet-category';
    return this.http
    .get<GetResponseBanquetCategory>(url)
    .pipe(map((response) => response._embedded.banquetCategory));
  }

  createBanquetCategory(banquetCategory: BanquetCategory) {
    const url = 'http://localhost:8181/api/banquet-category';
    return this.http.post<BanquetCategory>(url,banquetCategory);

  }
  deleteBanquetCategory(id :number) {
    const url = 'http://localhost:8181/api/banquet-category/'+id;
    return this.http.delete<BanquetCategory>(url);

  }
  getBanquetCategory(id :number){
    const url = 'http://localhost:8181/api/banquet-category/'+id;
    return this.http.get<BanquetCategory>(url);
  }

  updateBanquetCategory(id :number,BanquetCategory:BanquetCategory){
    const url = 'http://localhost:8181/api/banquet-category/'+id;
    return this.http.put<BanquetCategory>(url,BanquetCategory);
  }

}

  interface GetResponseBanquetCategory{
    _embedded: {
      banquetCategory:BanquetCategory[];
  };
}
