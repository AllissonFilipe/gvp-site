import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContact: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formContact = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required],
      'coment': [null, Validators.required]
    })
  }

}
