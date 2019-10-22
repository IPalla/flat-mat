import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;
  constructor(private google:GooglePlus, private platform: Platform,
    public loadingController: LoadingController) { }

  async ngOnInit() {
    console.log(window.cordova.plugins);
    
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '266429742545-9tvej5149gs8qrb07avvl3793ej3eqft.apps.googleusercontent.com',
        'offline': true
      }
    }
    else {
      params = {}
    }
    this.google.login(params)
      .then((response) => {
        console.log(response);
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + JSON.stringify(error))
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    console.log('accesToken', accessToken);
    console.log('accesSecret', accessSecret);
    console.log('Success');

  }
  onLoginError(err) {
    console.log(err);
  }

}
