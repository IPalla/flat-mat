import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;
  constructor(private platform: Platform,
    public loadingController: LoadingController) { }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
  }
  onLoginSuccess(accessToken, accessSecret) {
  }
  onLoginError(err) {
  }

}
