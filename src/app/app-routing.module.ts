import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { CartComponent } from './products/cart/cart.component';
import { WishlistComponent } from './products/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{
  path:'',redirectTo:'products',pathMatch:'full'
},
{
  path:'view-product/:id',component:ViewProductsComponent
},

{
  path:'cart/:id',component:CartComponent
},

{
  path:'wishlist',component:WishlistComponent
},


{path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
