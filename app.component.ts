import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwiperComponent } from './slider/swiper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwiperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carousel';
}
