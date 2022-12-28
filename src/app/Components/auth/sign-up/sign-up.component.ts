import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private authService:AuthService) { 
    this.userForm=this.formBuilder.group({
      username:new FormControl(''),
      password:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
    });
  }
  

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userForm.value);
    this.authService.addUser(this.userForm.value).subscribe((data:any)=>{
      next : console.log(data);
      
    })
    
  }

}
