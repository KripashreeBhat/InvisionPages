import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface login extends Array <login[]>{
  id:number;
  name:string;
  password:string
}

interface admin extends Array <admin[]>{
  name:string;
  empcode:string;
  email:string;
  id:number;
 
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  local:any;
  constructor(private http:HttpClient) { }
  
//  Permission guard
  isLogedIn(){
    this.local= localStorage.getItem('name') 
    console.log(this.local);
    
    if(this.local)
  {
      return true;
    }
    else{

      return false;
    }
    
    
  }

  getUser():Observable<login[]>{
    return this.http.get<login[]>('http://localhost:3000/logindetail');
  }
 
  putUser(data:any,id:number):Observable<login[]>{
  return this.http.put<login[]>('http://localhost:3000/logindetail/1',data);
}

  postadmin(data:any):Observable<admin[]>{
    return this.http.post<admin[]>('http://localhost:3000/admin',data);
} 

 getAdmin():Observable<admin[]>{
  return this.http.get<admin[]>('http://localhost:3000/admin');
}

   putAdmin(data:any,id:number):Observable<admin[]>{
    return this.http.put<admin[]>('http://localhost:3000/admin/'+id,data);
  } 
   
  deleteAdmin(id:number):Observable<admin[]>{
    return this.http.delete<admin[]>('http://localhost:3000/admin/'+id)
  }

}