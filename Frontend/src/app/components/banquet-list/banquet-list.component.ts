import { Component } from '@angular/core';
import { Banquet } from '../../common/banquet';
import { BanquetService } from '../../service/banquet.service';

@Component({
  selector: 'app-banquet-list',
  standalone: false,
  
  templateUrl: './banquet-list.component.html',
  styleUrl: './banquet-list.component.css'
})
export class BanquetListComponent {
  
  banquetHalls:Banquet[]=[];
  Banquet:any;
  constructor(private banquetService:BanquetService){}
    
    listBanquets(){
      this.banquetService.getBanquetList().subscribe((data)=>{
        this.banquetHalls=data;
        console.log(data)
      });
      
    }
    removeBanquet(id: number) {
      if (confirm('Are you sure to remove')) {
        this.banquetService
          .deleteBanquet(id)
          .subscribe((data) => {
            alert('banquet is removed!');
            this.listBanquets();
          });

        }
      }


    ngOnInit(){
      this.listBanquets();
    }
  }