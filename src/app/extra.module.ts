import { NgModule } from '@angular/core';
import { DataFromJsonComponent } from './data-from-json/data-from-json.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrudModule } from './crud.module';

@NgModule({
    declarations: [
        DataFromJsonComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CrudModule
    ]
})
export class ExtraModule {}
