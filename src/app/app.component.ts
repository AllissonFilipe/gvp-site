import { AfterViewInit, Component, OnChanges } from '@angular/core';
import { DynamicScriptLoaderService } from './services/DynamicScriptLoaderService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnChanges {
  title = 'gvpcontabilidade';

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngAfterViewInit() {
    this.loadScripts();
  }

  ngOnChanges(): void {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('vanillaJs','aosJs','bootstrapJs','glightboxJs','isotopeJs','swiperJs','mainJs').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
