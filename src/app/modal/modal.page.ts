import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  constructor(private navCtrl: NavController) {}

  goToSecondPage() {
    this.navCtrl.navigateForward('modal/second');
  }
}
