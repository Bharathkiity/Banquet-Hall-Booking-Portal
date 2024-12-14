import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanquetCategoryCreateComponent } from './components/banquet-category-create/banquet-category-create.component';
import { BanquetCategoryEditComponent } from './components/banquet-category-edit/banquet-category-edit.component';
import { BanquetCategoryListComponent } from './components/banquet-category-list/banquet-category-list.component';
import { BanquetCreateComponent } from './components/banquet-create/banquet-create.component';
import { BanquetListComponent } from './components/banquet-list/banquet-list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    
          BanquetListComponent,
          BanquetCreateComponent,
          BanquetCategoryCreateComponent,
          BanquetCategoryListComponent,
          BanquetCategoryEditComponent,
          LoginPageComponent,
        
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
