import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Req2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-req2',
  templateUrl: 'req2.html',
})
export class Req2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  type : string = this.navParams.get('thing1');
  showw(){
    console.log(this.type)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Req2Page');
  }

}
