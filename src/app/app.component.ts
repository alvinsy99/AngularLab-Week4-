import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "workshop4tut";
  data = JSON.parse(sessionStorage.getItem("sessionUser"));

  constructor(private router: Router) {}

  ngOnInIt() {
    if (typeof Storage !== "undefined") {
      this.data = JSON.parse(sessionStorage.getItem("sessionUser"));
    }
  }

  checkProfile() {
    console.log(this.data);
    if (sessionStorage.getItem("sessionUser") === null) {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl("/profile");
    }
  }

  logOut() {
    if (typeof Storage !== "undefined") {
      sessionStorage.clear();
      this.router.navigateByUrl("/login");
    }
  }
}
