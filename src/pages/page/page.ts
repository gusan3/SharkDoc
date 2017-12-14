import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRequirementPage } from '../new-requirement/new-requirement';
import { UpdateRequirementPage } from '../update-requirement/update-requirement';
import { ViewreqPage } from '../viewreq/viewreq';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {

  constructor(public navCtrl: NavController) {
  }
  
  goToNewRequirement(params){
    if (!params) params = {};
    this.navCtrl.push(NewRequirementPage);
  }

  goToUpdateRequirement(){
    this.navCtrl.push(UpdateRequirementPage);
  }

  goToViewRequirements(params){
    if (!params) params = {};
    this.navCtrl.push(ViewreqPage);
  }
}
