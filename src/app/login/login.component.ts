import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
// import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: "";
  password: "";
  valid_user = [
    { email: "test@mail.com", password: "123" },
    { email: "abc@mail.com", password: "098" },
    { email: "validmail@mail.com", password: "valid" }
  ];

  constructor(private router: Router) {
    // this.email = email;
    // this.password = password;
  }

  ngOnInit() {}

  itemClicked() {
    // alert("Clicked");
    console.log(this.email);
    console.log(this.password);
    for (let i = 0; i < this.valid_user.length; i++) {
      if (
        this.email == this.valid_user[i].email &&
        this.password == this.valid_user[i].password
      ) {
        this.router.navigateByUrl("/account");
        alert("Logged In");
      } else {
        alert("Log In Failed!!!!!!");
        break;
      }
    }
  }
}
