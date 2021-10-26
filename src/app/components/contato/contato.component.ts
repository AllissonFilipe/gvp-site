import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContact: FormGroup
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  @Output() eventLoading = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formContact = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required],
      'coment': [null, Validators.required],
      'recaptcha': [null, Validators.required]
    })
  }

  sendMail() {
    this.eventLoading.emit(true);
    this.http.post('http://localhost:3000/sendMail', this.formContact.value, this.httpOptions).subscribe(resp => {
      if (resp) {
        this.eventLoading.emit(false);
        this.toastr.success('Contato Enviado com Sucesso !', 'Success');
        this.formContact.reset();
      }
    }, (err: any) => {
      console.log(err);
      this.eventLoading.emit(false);
      this.toastr.error('Não foi possível enviar o seu Contato', 'Error');
      this.formContact.reset();
    });
  }

  resolved($event) {
  }

  errored() {
    console.warn(`reCAPTCHA error encountered`);
  }
}
