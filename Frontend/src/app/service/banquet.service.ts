import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Banquet } from '../common/banquet';

@Injectable({
  providedIn: 'root'
})
export class BanquetService {

  constructor(private http: HttpClient) { }
  getBanquetList() {
    const url = "http://localhost:8181/api/banquetHalls";

    return this.http
      .get<GetResponseProducts>(url)
      .pipe(map((response) => response._embedded.banquetHalls));
  }

  createBanquetHalls(id: number, banquetHall: Banquet) {
    const url = 'http://localhost:8181/api/v1/category/' + id + '/banquetHalls';
    return this.http.post<Banquet>(url, banquetHall);
  }
  deleteBanquet(id: number) {
    const url = 'http://localhost:8181/api/banquetHalls/' + id;
    return this.http.delete<Banquet>(url);

  }
}


interface GetResponseProducts {
  _embedded: {
    banquetHalls: Banquet[];
  };

}