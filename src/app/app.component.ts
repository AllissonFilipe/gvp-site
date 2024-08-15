import { Component } from '@angular/core';
import { DynamicScriptLoaderService } from './services/DynamicScriptLoaderService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gvpcontabilidade';

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { 
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('vanillaJs','aosJs','bootstrapJs','glightboxJs','isotopeJs','swiperJs').then(data => {
      // Script Loaded Successfully
      this.dynamicScriptLoader.load('mainJs').then(data => {}).catch(error => console.log(error));
    }).catch(error => console.log(error));
  }
}
