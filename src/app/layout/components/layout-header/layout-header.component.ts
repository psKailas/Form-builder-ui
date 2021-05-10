import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
   name: any;
  username: string;
  status1:boolean;
  status2:boolean;

  constructor(private router:Router) {
   }

  ngOnInit(): void {
     const role = (localStorage.getItem('role'));
     this.username = (localStorage.getItem('username'));
     this.name=this.username;
    console.log(this.username);
    console.log(role);
    if(role=="ROLE_USER"){
        this.status1=true;
        this.status2=false;
    }
    else{
      this.status1=false;
      this.status2=true;
    }
  }

  logout(){
    
  } 
  approve(){
    this.router.navigate(["/layout/payment-approval"]);
  }

 
}
