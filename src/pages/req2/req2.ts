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

  textOption;
  title;
  options;
  type : string = this.navParams.get('card-type');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.textOption = [
      {
        'title': 'You have choose a Graph. What type of graph do you want?',
        'options': ['Bar', 'Bubble', 'Line', 'Gauge', 'A new model']
      
      },
      {
        'title': 'You have choose a Table. What columns do you want?',
        'options': ['Totals', 'Revenue', 'WTW']
      }
    ]

    if(this.type == "chart") {
      this.title = this.textOption[0].title;
      this.options = this.textOption[0].options;
    }else{
      this.title = this.textOption[1].title;
      this.options = this.textOption[1].options;
    }
  }

  goToNewRequirement() {
    
  }

}
