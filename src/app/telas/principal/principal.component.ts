import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private seoService: SeoService) { }
  loading = false;

  ngOnInit() {
    this.seoService.updateSeo({
      title: 'GVP Contabilidade | Contador em Paulista/PE — Abertura de Empresas e Serviços Contábeis',
      description: 'Escritório de contabilidade em Paulista/PE com mais de 14 anos de experiência. Abertura de empresas, escrituração contábil, departamento pessoal, tributário e certificado digital.',
      canonicalUrl: 'https://gvpcontabilidade.com.br/'
    });
  }

  setLoading(event) {
    this.loading = event;
  }

}
