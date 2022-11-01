import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addadmin!:FormGroup;
  empDetail!:any;
  display=false;
  constructor(private fb: FormBuilder, private service: ServicesService, private route:Router) { }
  get form(){
    return this.addadmin.get
  }
  ngOnInit(): void {
    this.addadmin = this.fb.group({
      name :[''],
      code: [''],
      mail:[''],
      
      
      // namefill1:['Kevin'],
      namefill1:[''],
      namefill2:['John'],
      // code1:['RT12345'],
      code1:[''],
      code2:['RT23456'],
      // mail1:['kevin@robosoftin.com'],
      mail1:[''],
      mail2:['john@robosoftin.com']
      
    })
    this.getAllEmpDetail();
  }
  // post
  addAdmin(){
    const superAdmin = { name: this.addadmin.get('name')?.value, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.postadmin(superAdmin).subscribe(data=>{
      alert('successfully added')
      // this.addadmin.reset();
    },err=>{alert('Something went wrong, try again!')});
    this.getAllEmpDetail();
  }

  edit(detail:any){
    this.empDetail.id=detail.id;
    this.addadmin.controls['name'].setValue(detail.name)
    this.addadmin.controls['code'].setValue(detail.empcode)
    this.addadmin.controls['mail'].setValue(detail.email)
  }
  // put
  editAdmin(){
   
   
   const updateAdmin ={ name : this.addadmin.get('name')?.value, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.putAdmin(updateAdmin,this.empDetail.id).subscribe(data=>{
      alert("successfully updated!!")
    });
  }
  // delete
    deleteAdmin(detail: any){
   
      this.service.deleteAdmin(detail.id)
      .subscribe(data=>{
      alert("Are you sure ?");
    }
    
    );
    this.getAllEmpDetail();
  }
    
  // get
    getAllEmpDetail(){
      this.service.getAdmin().subscribe(data=>{
        this.empDetail=data;
              })
            }
          }
        
       
        





