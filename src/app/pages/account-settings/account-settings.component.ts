import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public theme = document.querySelector('#theme');
  public links:NodeListOf<Element>;

  constructor(private serviceSettings:SettingsService) { }

  ngOnInit(): void {
    this.links= document.querySelectorAll('.selector');
    this.serviceSettings.checkCurrentTheme(this.links);
  }

  changeTheme(tema:string){    
    this.serviceSettings.changeTheme(tema, this.links);
  }

}
