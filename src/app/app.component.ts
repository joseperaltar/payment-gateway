import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'payment-gateway';
}
