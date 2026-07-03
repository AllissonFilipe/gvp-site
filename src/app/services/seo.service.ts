import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly defaultOgImage = 'https://gvpcontabilidade.com.br/assets/images/logo/logo3.png';

  constructor(private titleService: Title, private metaService: Meta) {}

  updateSeo(config: SeoConfig): void {
    // Atualiza o título da aba/janela
    this.titleService.setTitle(config.title);

    // Atualiza meta description
    this.metaService.updateTag({ name: 'description', content: config.description });

    // Atualiza Open Graph
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });

    if (config.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: config.ogImage });
    }

    if (config.canonicalUrl) {
      this.metaService.updateTag({ property: 'og:url', content: config.canonicalUrl });

      // Atualiza ou cria link canonical
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', config.canonicalUrl);
    }

    // Atualiza Twitter Card
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
  }
}
