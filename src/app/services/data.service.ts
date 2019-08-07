import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { HttpClient } from "selenium-webdriver/http";
import { HttpClient } from "@angular/common/http";

interface User {
  email: string;
  username: string;
  birthday: string;
  age: number;
  valid: boolean;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    return this.http.post<User>("/api/auth", {
      email: email,
      password: password
    });
  }
}
