import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() { 
    const temaLocal = localStorage.getItem('theme') ||  './assets/css/colors/default-dark.css';    
    this.theme.setAttribute('href', temaLocal);
  }

  changeTheme(tema:string,linksElements:NodeListOf<Element>){    
    const url:string =`./assets/css/colors/${tema}.css`;
    this.theme.setAttribute('href',url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme(linksElements);
  }

  checkCurrentTheme(links:NodeListOf<Element>){
    links.forEach(element => {
      element.classList.remove('working');
      const nameTheme = element.getAttribute('data-theme');
      const urlNameTheme: string =`./assets/css/colors/${nameTheme}.css`;
      if (urlNameTheme===this.theme.getAttribute('href')){
          element.classList.add('working');
      }
    });
  }

}
