import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: any) {
    const url = 'http://localhost:80/backend/register.php';
    // Handle cors requests
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      // 'Access-Control-Allow-Origin': '*',
    //   // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      });
    const options = { headers };
    // Send POST request with form data
    this.http.post(url, form.value, options).subscribe(
      (response: any) => {
        alert(response.message);
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Failed to register');
      }
    );
  }
}


