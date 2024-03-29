import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { ContatoService } from '../contato.service';



import { ToastrService } from 'ngx-toastr';



@Component({

  selector: 'app-add-contato',

  templateUrl: './add-contato.component.html',

  styleUrls: ['./add-contato.component.css']

})

export class AddContatoComponent implements OnInit{

  contatoForm: FormGroup;



  constructor(

    private contatoService: ContatoService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.contatoForm = this.createForm();

    }



    ngOnInit(){

      this.contatoService.getContatoList();

    }



    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        idade: new FormControl('', Validators.required),

        telefone: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

      });

    }



    resetForm(){

      this.contatoForm.reset();

    }



    submitForm(){

      this.contatoService.insertContato(this.contatoForm.value);

      this.toastr.success(

        this.contatoForm.controls['nome'].value + " adicionado"

      );

    }



    get nome(){

      return this.contatoForm.get('nome');

    }



    get idade(){

      return this.contatoForm.get('idade');

    }



    get telefone(){

      return this.contatoForm.get('telefone');

    }

}

