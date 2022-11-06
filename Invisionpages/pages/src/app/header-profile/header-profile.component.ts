import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {
 empname:any;
  constructor(private sevice : ServicesService) { }

  ngOnInit(): void {
    this.empname = localStorage.getItem("name");
    this.empname= this.empname.replaceAll('"', '');

  }
 
  removeusername(){
   localStorage.removeItem('name')
  } 

}
