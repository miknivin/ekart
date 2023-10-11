import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {



  products: any[] = [];
  searchKey: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // Call the API service method to get all products
    this.api.getAllProducts().subscribe(
      (data: any) => {
        // Assign the retrieved data to the products property
        this.products = data;
        console.log(this.products); // You can access the products here
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    // this.searchKey=this.api.searchTerm
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchKey=result
      console.log(this.searchKey);

    })

  }
  // this.searchKey = this.api.searchTerm;
}
