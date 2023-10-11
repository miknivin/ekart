import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  productId: string = '';
  product: any; // Store the selected product
  products: any[] = [];

  constructor(private viewactivatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    // Access the 'id' route parameter and log its value
    this.productId = this.viewactivatedRoute.snapshot.params['id'];
    console.log('Product ID:', this.productId);

    // Call the API service method to get all products
    this.api.getAllProducts().subscribe(
      (data: any) => {
        // Assign the retrieved data to the products property
        this.products = data;
        console.log(this.products);

        // Find the product with the matching ID
        this.product = this.products.find((p) => p.id === this.productId);
        console.log('Selected Product:', this.product);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

  //   //call viewproduct api
  //   this.api.viewProduct(this.productId).subscribe((result:any)=>{
  //     console.log(result);
  //     this.product=result
  //   }),
  //   (result:any)=>{
  //     alert(result.error)
  //   }

   }

   addToWishlist(){
    const {id,title,price,image}=this.product

    this.api.addTowishlist(id,title,price,image).subscribe((result:any)=>{
      alert(result)

    },
    (result:any)=>{
      alert('error'+result.error)
    })
   }

   //add to cart'
   addToCart(product:any){
    //add quantity to product object
    Object.assign(product,{quantity:1})
    console.log(product+ 'product');
    //api call to add quantity to cart
    this.api.addToCart(product).subscribe((result:any)=>{
      alert(result)
    },
    (error)=>{
      console.error(error);
    }
    )
   }

}
