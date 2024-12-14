import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BanquetCategoryCreateComponent } from './components/banquet-category-create/banquet-category-create.component';
import { BanquetCategoryEditComponent } from './components/banquet-category-edit/banquet-category-edit.component';
import { BanquetCategoryListComponent } from './components/banquet-category-list/banquet-category-list.component';
import { BanquetCreateComponent } from './components/banquet-create/banquet-create.component';
import { BanquetListComponent } from './components/banquet-list/banquet-list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  {path:'banquet-list',component:BanquetListComponent},
  {path:'banquet-create',component:BanquetCreateComponent},
  {path:'banquet-category-create',component:BanquetCategoryCreateComponent},
  {path:'banquet-category-list',component:BanquetCategoryListComponent},
  {path:'banquet-category-edit/:id',component:BanquetCategoryEditComponent},
  {path:'login-page',component:LoginPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
