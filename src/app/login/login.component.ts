import { Component, OnInit } from "@angular/core";
import { Route, Router, Data } from "@angular/router";
import { DataService } from "../services/data.service";
import { HttpErrorResponse } from "@angular/common/http";

// import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: "";
  password: "";
  // valid_user = [
  //   { email: "test@mail.com", password: "123" },
  //   { email: "abc@mail.com", password: "098" },
  //   { email: "validmail@mail.com", password: "valid" }
  // ];

  constructor(private router: Router, private dataservice: DataService) {
    // this.email = email;
    // this.password = password;
  }

  ngOnInit() {}

  itemClicked() {
    // alert("Clicked");
    console.log(this.email);
    console.log(this.password);
    this.dataservice.logIn(this.email, this.password).subscribe(data => {
      var dataJSON = JSON.stringify(data);
      console.log(dataJSON);

      if (data.valid === true) {
        sessionStorage.setItem("sessionUser", dataJSON);
        this.router.navigateByUrl("/account");
        console.log(data);
      }
    }),
      (error: HttpErrorResponse) => {
        alert("Error" + error);
      };
  }
}
