import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  _
} from 'underscore';
import { GoogleService } from '../auth/google.service';

@Component({
  selector: 'app-goole-redirect',
  templateUrl: './goole-redirect.page.html',
})
export class GooleRedirectPage implements OnInit {

  ngOnInit(): void {
    console.log('INITTT');
  }

  constructor(private route: ActivatedRoute, private router: Router, private googleService: GoogleService) {
    console.log(this.router.getCurrentNavigation().extractedUrl.fragment);
    this.route.fragment.subscribe((fragment: string) => {
      const matrix = fragment.split('&').map(pair=>pair.split('='));
      let keyObj = {};
      matrix.forEach(pair=>keyObj[`${pair[0]}`]=pair[1]);
      console.log(this.googleService.login(keyObj['access_token']));
      //console.log(this.googleService);
    });
  }

}