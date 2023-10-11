import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from '../cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    this.cartCount()
  }
  base_url=' http://localhost:5000'

  cartItemsCount =new BehaviorSubject(0)

  searchTerm = new BehaviorSubject('')
//api function to get all products from the database
  getAllProducts(){
    return this.http.get(`${this.base_url}/products/all-products`)
  }

  viewProduct(productId:any){
    return this.http.get(`${this.base_url}/products/view-products/${productId}`)
  }

  //api function to add products to the wishlist
  addTowishlist(id:any,title:any,price:any,image:any){
    const body = {
      id,
      title,
      price,
      image
    }
    return this.http.post(`${this.base_url}/wishlists/add-to-wishlist`,body)
  }

  //view wishlist items
  viewWishList(){
    return this.http.get(`${this.base_url}/wishlists/view-all-wishlist`)
  }

  //delete wishlist item
  deleteFromWishlist(id: any) {
    return this.http.delete(`${this.base_url}/wishlists/delete-wishlist-product/${id}`);
  }

  //add to cart
  addToCart(product:any){
    const body = {
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      quantity:product.quantity,
      grandTotal:product.grandTotal
    }
    return this.http.post(`${this.base_url}/carts/add-to-cart`,body)
  }
  //get cart products count
  getCartItems(){
    return this.http.get(`${this.base_url}/carts/get-cart`)
  }

  //to get products count
  cartCount() {
    this.getCartItems().subscribe((result: any) => {

      this.cartItemsCount.next(result.length);
    });
  }

  //delete cart item
  deleteCartProduct(id:any){
   return this.http.delete(`${this.base_url}/carts/delete-products/${id}`)
  }

  //increment cart product
  incrementProduct(id:any){
    return this.http.get(`${this.base_url}/carts/increment-product/${id}`)
  }

  //decrement cart product
  decrementProduct(id:any){
    return this.http.get(`${this.base_url}/carts/decrement-product/${id}`)
  }
}
