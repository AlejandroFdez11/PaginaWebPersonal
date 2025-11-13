import { Component, Inject, PLATFORM_ID, signal,AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('PagPersonal');

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }
}
}
