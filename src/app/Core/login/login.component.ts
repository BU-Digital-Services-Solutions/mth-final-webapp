import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router){}
  
  ngOnInit(): void {
  // this.http.get('https://mrp-function-app-1.azurewebsites.net/api/StandardsPage').subscribe(data=>{
  //  console.log(data)

  //  })

    this.loginForm = new FormGroup({
      email: new FormControl(''),
    password: new FormControl('')
    })
  }

  onSubmit(){
    if(this.loginForm.value.email === 'a@a.com' && this.loginForm.value.password === '123') {
      console.log(this.loginForm.value);
    this.router.navigate(['/layout/dashboard']);
    }
  }

}