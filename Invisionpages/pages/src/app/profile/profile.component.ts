import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { AdminComponent } from '../admin/admin.component';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  quesionnaire! : FormGroup;
  // additional! : FormGroup;
  display=false;
  empname:any;
  constructor(private fb : FormBuilder, private dialog : MatDialog ,private sevice : ServicesService) { }
 get form(){
  return this.quesionnaire.get;
 }
  ngOnInit(): void {
    this.quesionnaire = this.fb.group({
      userTitle : [''],
      description : [''],
      btntitle: [''],
      btntext:[''],
      checkbox:[''],
      startDate:[''],
      endDate:[''],
      reminder:[''],
      file:[''],
      sheet:[''],
      mail:['']
    });

    // let additional = this.fb.group({
    //   startDate:[''],
    //   endDate:[''],
    //   reminder:[''],
    //   file:[''],
    //   sheet:[''],
    //   mail:['']
    // })
  }
  displayclose(){
   this.display=true;
   
  }
  displayadd(){
    this.display=false;
  }

  openDialog(){
    this.dialog.open(AdminComponent,
  {
    panelClass: 'my-class'  // Add a custom panel class
  });
  }

  opensecDialog(){
    this.dialog.open(AdminAddComponent,{
      panelClass: 'my-class'

    });
  }
  displayName(){
    this.sevice.getUser().subscribe(data=>{
     this.empname = data;
    })
  }

}
