import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Req2Page } from '../req2/req2';

@Component({
  selector: 'page-new-requirement',
  templateUrl: 'new-requirement.html'
})
export class NewRequirementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
  type="";
  goToNewRequirement(params){
    if(params == ""){
      alert("Select at least one option");
    }else{
      this.navCtrl.push(Req2Page,{
        'card-type':params
      });
    }
    
    if (!params) params = {};
    
  }
 
}
