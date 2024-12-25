import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
// import { ItemsComponent } from "./pages/items/items.component";
// import { HomeComponent } from "./pages/home/home.component";
// import { LoginComponent } from "./pages/login/login.component";
// import { InformationComponent } from "./pages/information/information.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fogyassz kevesebb sót - reloaded';
}
