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

modalData = [
  {
  'title': 'Requirement #2341',
  'subTitle': 'As the IBM CEO, I can have the Cloud Consumption reports, so that I can have my reports automated in the HPD Dashboard. The IBM CEO would be able to access to anytime. Should be done by mid november Needs to keep the data up to date'
  },
  {
    'title': 'Requirement #2342',
    'subTitle': 'As the IBM CEO, I can have the Revenue reports, so that I can have my reports automated in the HPD Dashboard. The IBM CEO would be able to access to anytime. Should be done by mid november Needs to keep the data up to date'
  },
  {
    'title': 'Requirement #2343',
    'subTitle': 'The IBM CEO would be able to access to the reports anytime. Should be done by the end of november Needs to keep the data up to date'
  }
];

issues = [
  {
    'title': "#2341",
    'description': "Requirement short description",
    'sprint': "Sprint #51"
  },
  {
    'title': "#2342",
    'description': "Requirement short description2",
    'sprint': "Sprint #55"
  },
  {
    'title': "#2343",
    'description': "Requirement short description3",
    'sprint': "Sprint #55"
  }
]

  showAlert(n) {
    let alert = this.alertCtrl.create({
      title: this.modalData[n].title,
      subTitle: this.modalData[n].subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
