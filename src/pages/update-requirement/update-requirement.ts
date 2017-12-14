import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Req2Page } from '../req2/req2';

@Component({
  selector: 'page-update-requirement',
  templateUrl: 'update-requirement.html'
})
export class UpdateRequirementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

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
 
}
