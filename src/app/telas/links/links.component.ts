import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
})
export class LinksComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSeo({
      title: 'Links Úteis | GVP Contabilidade',
      description: 'Acesse links úteis da GVP Contabilidade: portais governamentais, sistemas fiscais, portal do cliente e ferramentas contábeis para facilitar sua gestão empresarial.',
      canonicalUrl: 'https://gvpcontabilidade.com.br/links'
    });
  }

}
