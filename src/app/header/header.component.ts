import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  uiClass: string[] = ['active', '', '', '', '', '', ''];
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick(index) {
    for (let i = 0; i < this.uiClass.length; i++) {
      this.uiClass[i] = '';
    }
    this.uiClass[index] = 'active';
  }

  isLogedin() {
    return localStorage.getItem('userDetails') ? true : false;
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}
