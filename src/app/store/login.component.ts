import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginComponent {
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(loginForm: any): void {
    const url = 'http://localhost:80/backend/login.php'; // Update the URL to match your backend endpoint
    const { email, password } = loginForm.value;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const options = { headers };
    this.http.post(url, { email, password }, options).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = response.error; // Display error from backend
        } else {
          alert('Login successful! Welcome, ' + response.name);
          sessionStorage.setItem('user', response.name);
          this.router.navigate(['/cart']); // Redirect to cart page after login
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.message = 'Failed to login. Please try again.';
        sessionStorage.removeItem('user');
      }
    );

    console.log('Login data:', loginForm.value);
  }
}


