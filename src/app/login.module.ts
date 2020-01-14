import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
    ]
})
export class LoginModule { }
