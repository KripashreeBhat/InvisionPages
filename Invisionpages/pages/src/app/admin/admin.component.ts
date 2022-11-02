import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import * as crypt from 'crypto-js'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addadmin!:FormGroup;
  addadminarray!:FormArray;
  empDetail:any;
  display=false;
  message: any;
  encrypt :any;
  decrypt :any;
  name:any;
 
  constructor(private fb: FormBuilder, private service: ServicesService, private route:Router) { }
  get form(){
    return this.addadmin.get;
  }
  ngOnInit(): void {

  this.addadmin = this.fb.group({
    name :[''],
    code: [''],
    mail:[''],
    
  })
 
  this.getAllEmpDetail();
   
  }

  encryptt(){
    
    this.name=this.addadmin.get('name')?.value;
    this.message=this.addadmin.get('mail')?.value;
    this.encrypt = crypt.AES.encrypt( this.name.trim(),this.message.trim()).toString();
    console.log(this.encrypt);
  }
  decryptt(){
    this.decrypt = crypt.AES.decrypt( this.encrypt,this.message.trim()).toString(crypt.enc.Utf8);
    console.log(this.decrypt);
   
  }
  
  // post
  addAdmin(){
    this.encryptt();
    // console.log(this.encrypt);
    this.decryptt();
    // console.log(this.decrypt);
    
   
    const superAdmin = { name: this.encrypt, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.postadmin(superAdmin).subscribe(data=>{
      alert('successfully added')
      // this.addadmin.reset();
    },err=>{alert('Something went wrong, try again!')});
  }

  edit(detail:any){
    this.decryptt();
    this.empDetail.id=detail.id;
    this.addadmin.controls['name'].setValue(detail.name);
    this.addadmin.controls['code'].setValue(detail.empcode)
    this.addadmin.controls['mail'].setValue(detail.email)
    // this.getAllEmpDetail();
  }

  // put updated information
  editAdmin(){
    this.decryptt();
    console.log(this.decrypt);
    
    this.getAllEmpDetail();
   const updateAdmin ={ name : this.decrypt, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.putAdmin(updateAdmin,this.empDetail.id).subscribe(data=>{
      alert("successfully updated!!")

    });
    // this.getAllEmpDetail();
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
        
       
        





