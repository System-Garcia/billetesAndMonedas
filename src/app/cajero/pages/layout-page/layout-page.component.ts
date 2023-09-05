import { Component } from '@angular/core';
import { environments } from 'src/app/environments/enviroment';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public imageUrl: string = environments.imageUrl;

}
