import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;


  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.userservice.getUserId(Number(id)).subscribe(data => {
      this.user = data;
    });
  }

  // tslint:disable-next-line:typedef
  deconect() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
