import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private api:ApiService){}
  cartCountValue:any
  ngOnInit(): void {
    this.api.cartItemsCount.subscribe((data:any)=>{
      console.log('cartitems-'+data);
      this.cartCountValue=data
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.api.searchTerm.next(event.target.value)
  }
}
