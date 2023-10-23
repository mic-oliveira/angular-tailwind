import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  
  constructor(private readonly _router: Router) {
  }
  
  ngOnInit(): void {
  }
  
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['']).then();
  }
}
