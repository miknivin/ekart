import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  allWishlist : any[] = []
  emptyWish:boolean=false
  constructor (private api:ApiService){}

  ngOnInit(): void {
    this.api.viewWishList().subscribe((result:any)=>{
      console.log(result);
      this.allWishlist=result
      if (this.allWishlist.length===0) {
        this.emptyWish=true
        console.log(this.allWishlist);

      }
      else{
        this.emptyWish=false
      }
    },
    (result:any)=>{
      console.log(result.error);
    }
    )
  }

  deleteProductFromWishlist(id: any) {
    this.api.deleteFromWishlist({id}).subscribe(
      (result:any) => {
        // Handle success
        this.allWishlist = result
        alert('Product deleted from wishlist successfully');
      },
      (error) => {
        console.error('Error deleting product from wishlist', error);
        alert('Error deleting')
        // Handle error
      }
    );
  }
}
