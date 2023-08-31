import { Component, OnInit, Renderer2 } from '@angular/core';
import {environment} from "../environments/environment";
import { Platform } from '@ionic/angular';
import { MediaMatcher } from '@angular/cdk/layout';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import OneSignal from 'onesignal-cordova-plugin';


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

  constructor(private platform: Platform, private mediaMatcher: MediaMatcher, private renderer: Renderer2) { 

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // this. OneSignalInit();
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

  // Call this function when your app starts
  // OneSignalInit(): void {
  // // Uncomment to set OneSignal device logging to VERBOSE  
  // // OneSignal.setLogLevel(6, 0);

  // // NOTE: Update the setAppId value below with your OneSignal AppId.
  //   OneSignal.setAppId("9681fe6f-a4fe-41eb-8e1b-9640857a3a68");
  //   OneSignal.setNotificationOpenedHandler(function(jsonData) {
  //       console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  //   });

  // // Prompts the user for notification permissions.
  // //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  //   OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
  //       console.log("User accepted notifications: " + accepted);
  //   });
  // }



  protected readonly environment = environment;
}
