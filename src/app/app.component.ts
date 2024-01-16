import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Name: any;
  getData(temp: any) {
    this.Name = temp;
  }
}
