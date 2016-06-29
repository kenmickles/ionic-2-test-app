import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private contactPage: any;

  constructor(private navController: NavController) {
    this.contactPage = ContactPage;
  }

  presentAlert() {
    let alert = Alert.create({
      title: 'Hello',
      subTitle: 'This is a test',
      buttons: ['Dismiss']
    });
    this.navController.present(alert);
  }
}
