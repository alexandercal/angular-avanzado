import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  listaMenu:any[] = [];
  constructor(private serviceSidebar:SidebarService) { }

  ngOnInit(): void {
    this.listaMenu= this.serviceSidebar.menu;
  }

}
