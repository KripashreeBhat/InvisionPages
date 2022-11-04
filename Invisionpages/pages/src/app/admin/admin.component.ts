import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import * as crypt from 'crypto-js'
import { LiteralPrimitive } from '@angular/compiler';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addadmin!:FormGroup;
  addadminarray!:FormArray;
  empDetail:any;
  display=true;
  key: any;
  encrypt :any;
  decrypt :any;
  name!:any;
  log =false;

 
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
    this.key=this.addadmin.get('mail')?.value;
    
    this.encrypt = crypt.AES.encrypt( this.name.trim(),this.key.trim()).toString();
    console.log(this.encrypt);
    
    
  }
  decryptt(msg:any){
    
    this.key=this.addadmin.get('mail')?.value;
     this.decrypt=crypt.AES.decrypt( this.encrypt,this.key.trim()).toString(crypt.enc.Utf8);
    console.log(this.decrypt);
   
  }
  
  // post
  addAdmin(){
    // this.encryptt();
    // console.log(this.encrypt);
    // this.decryptt();
    // console.log(this.decrypt);
    // const superAdmin = { name: this.encrypt, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    
   
    const superAdmin = { name: this.addadmin.get('name')?.value, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.postadmin(superAdmin).subscribe(data=>{
      alert('successfully added')
      this.addadmin.reset();
      this.getAllEmpDetail();
    },err=>{alert('Something went wrong, try again!')});
   
  }
      

  edit(detail:any){
    // this.encryptt();
    // this.decryptt();
    this.display=false; //removing + button
    this.empDetail.id = detail.id;
    this.addadmin.controls['name'].setValue(detail.name);
    this.addadmin.controls['code'].setValue(detail.empcode)
    this.addadmin.controls['mail'].setValue(detail.email)
    // this.getAllEmpDetail();
  }

  // put updated information
  updateAdmin(){
    this.display=true;
    // this.encryptt();
    // this.decryptt();
    // console.log(this.decrypt);
    // const updateAdmin ={ name : this.decrypt, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    const updateAdmin ={ name : this.addadmin.get('name')?.value, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.putAdmin(updateAdmin,this.empDetail.id).subscribe(data=>{
    alert("successfully updated!!");
      this.getAllEmpDetail();
    },
    err=>{ alert('Something went wrong, try again!') } );
   
  }
      
  // delete
    deleteAdmin(detail: any){
      this.service.deleteAdmin(detail.id)
      .subscribe(data=>{
      alert("Are you sure ?");
      this.getAllEmpDetail();
      // alert('succesfully deleted!!');
    },
    err=>{alert('Something went wrong, try again!')}
    );
  }
  
  // get
    getAllEmpDetail(){
      // this.decryptt();
      this.service.getAdmin().subscribe(data=>{
        this.empDetail=data;
        // for(let det of this.empDetail){
        //  det.name= this.decryptt(det.name);
        // }
      },err=>{alert('Something went wrong, try again!')})
     }
   }

    
   
  
    





