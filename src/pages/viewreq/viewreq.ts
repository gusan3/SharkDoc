import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ViewreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewreq',
  templateUrl: 'viewreq.html',
})
export class ViewreqPage {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Requirement #1234',
      subTitle: `      
      As the IBM CEO, I can have the Cloud Consumption reports, so that I can have my reports automated in the HPD Dashboard.
      The IBM CEO would be able to access to anytime.
      Should be done by mid november
      Needs to keep the data up to date`,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewreqPage');
  }

}
