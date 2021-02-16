import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../usermodele';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: any;
 /* value: any;
  elementType: any;*/
  myAngularQrCode = `Begin QrCode :
NAME: maguichette
DATE : 2020-09-18` ;

  constructor(private userservice: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idp = this.route.snapshot.params.id;
    /*console.log(idp);*/
    this.userservice.getUserId(idp).subscribe(data => {
      this.user = data;
    });
  }

}
