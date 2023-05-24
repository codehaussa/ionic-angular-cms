import { Component, OnInit, Renderer2 } from '@angular/core';
import {environment} from "../environments/environment";
import { Platform } from '@ionic/angular';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Dashboard', url: 'dashboard', icon: 'home' },
    { title: 'PortaOne Integration', url: 'integration/portaone', icon: 'people' },
    { title: 'Log Out', url: 'login', icon: 'log-out' },
  ];
  darkMode: boolean = true;

  constructor(private platform: Platform, private mediaMatcher: MediaMatcher, private renderer: Renderer2) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.toggleDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

      // Listen for changes in color scheme
      const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      colorSchemeQuery.addEventListener('change', (event) => {
        this.toggleDarkMode(event.matches);
      });
    });
  }

  toggleDarkMode(enableDark: boolean) {
    if (enableDark) {
      this.renderer.addClass(document.body, 'dark');
      this.renderer.removeClass(document.body, 'light');
    } else {
      this.renderer.addClass(document.body, 'light');
      this.renderer.removeClass(document.body, 'dark');
    }
    this.darkMode = enableDark;
    console.log(this.darkMode);
  }



  protected readonly environment = environment;
}
