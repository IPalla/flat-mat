import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-members',
  templateUrl: 'members.page.html',
  styleUrls: ['members.page.scss']
})
export class MembersPage {

  numbers: Array<Number>;
  constructor(private callNumber: CallNumber, public actionSheetController: ActionSheetController, public toastController: ToastController, public alertController: AlertController) {
    this.numbers = [1, 2, 3];
  }

  callMember(number: any): void {
    console.log("calling " + number);
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async presentActionSheet(contact) {
    const actionSheet = await this.actionSheetController.create({
      header: contact.name,
      buttons: [{
        text: 'Call',
        icon: 'call',
        handler: () => {
          this.callMember(contact.number);
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.presentDeleteNotification();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentDeleteNotification() {
    const toast = await this.toastController.create({
      message: 'Member deleted',
      duration: 2000
    });
    toast.present();
  }

  async presentAddUserPrompt() {
    const prompt = await this.alertController.create({
      header: 'Invite via mail',
      inputs: [
        {
          name: 'Room name',
          type: 'email',
          placeholder: 'new@member.com'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (pcholder) => {
            console.log("ADD: " + pcholder);
          }
        }
      ]
    });
    prompt.present();
  }
}
