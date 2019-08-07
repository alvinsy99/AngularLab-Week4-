import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  email = "";
  username = "";
  age = "";
  birthday = "";
  data;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof Storage !== "undefined") {
      var dataJSON = sessionStorage.getItem("sessionUser");
      this.data = JSON.parse(dataJSON);
      console.log("Storage Ready!!");
    } else {
      console.log("No Storage");
    }
  }

  profileSubmit() {
    var edit_data = {
      email: this.email,
      username: this.username,
      age: this.age,
      birthday: this.birthday
    };
    sessionStorage.setItem("sessionUser", JSON.stringify(edit_data));
    this.router.navigateByUrl("/account");
  }
}
