import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    formContact: FormGroup
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    @Output() eventLoading = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formContact = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email': [null, Validators.required, Validators.email],
      'phone': [null, Validators.required],
      'coment': [null, Validators.required],
      'recaptcha': [null, Validators.required],
      'consent': [false, Validators.requiredTrue]
    })
  }

  sendMail() {
    this.eventLoading.emit(true);
    this.http.post('https://gvp-backend.onrender.com/sendMail', this.formContact.value, this.httpOptions).subscribe(resp => {
      if (resp) {
        this.eventLoading.emit(false);
        this.toastr.success('Contato Enviado !', 'Sucesso');
        this.formContact.reset();
      }
    }, (err: any) => {
      console.log(err);
      this.eventLoading.emit(false);
      this.toastr.error('Não foi possível enviar o seu Contato', 'Erro');
      this.formContact.reset();
    });
  }

  resolved($event) {
  }

  getPhoneMask(): string {
    return this.isTelephone() ? '(00) 0000-00009' : '(00) 00000-0000';
 }

  isTelephone(): boolean {
  return this.formContact.get('phone').value == null ? true : this.formContact.get('phone').value.toString().length < 11 ? true : false;
 }

  errored(event) {
    console.warn(`reCAPTCHA error encountered`);
  }

  formContactIsDisabled() {
    return (
      !this.formContact.get("firstname").value ||
      !this.formContact.get("lastname").value ||
      !this.formContact.get("email").value ||
      !this.formContact.get("phone").value ||
      !this.formContact.get("coment").value ||
      !this.formContact.get("recaptcha").value ||
      !this.formContact.get("consent").value
    )
  }

}