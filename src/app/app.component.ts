import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './sherad/components/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teste-angular';
}
