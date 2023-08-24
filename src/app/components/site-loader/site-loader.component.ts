import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-loader',
  templateUrl: './site-loader.component.html',
  styleUrls: ['./site-loader.component.css']
})
export class SiteLoaderComponent {
  @Input() progress: number = 0;
}
