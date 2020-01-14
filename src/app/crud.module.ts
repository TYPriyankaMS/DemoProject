import { NgModule } from '@angular/core';
import { SearchOneComponent } from './search-one/search-one.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteComponent } from './delete/delete.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TrimPipe } from './trim.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SearchOneComponent,
        SearchProductComponent,
        EditProductComponent,
        DeleteComponent,
        AddProductComponent,
        TrimPipe,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        TrimPipe,
        FilterPipe
    ]
})
export class CrudModule { }
