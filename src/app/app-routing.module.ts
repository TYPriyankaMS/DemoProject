import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { DataFromJsonComponent } from './data-from-json/data-from-json.component';
import { SearchOneComponent } from './search-one/search-one.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuard], data: { expected: 'giridhar@ty.com' } },
  { path: 'search', component: SearchProductComponent },
  { path: 'delete/:id', component: DeleteComponent, canActivate: [AuthGuard], data: { expected: 'giridhar@ty.com' } },
  { path: 'data-from-json', component: DataFromJsonComponent },
  { path: 'search-one', component: SearchOneComponent },
  { path: 'edit/:id', component: EditProductComponent, canActivate: [AuthGuard], data: { expected: 'giridhar@ty.com' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
