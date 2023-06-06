import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../contato.service';

import { ToastrService } from 'ngx-toastr';

import { Contato } from '../contato';





@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css']
})
export class ListaContatoComponent {
  page = 1;

  listaContatos: Contato[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private contatoService: ContatoService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.contatoService.getContatoList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaContatos = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let contato = item.payload.toJSON();

          contato['$key'] = item.key;

          this.listaContatos.push(contato as Contato);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deleteContato(contato: Contato) {

    if (window.confirm('Tem certeza que deseja remover o contato?')) {

      if (contato.$key != null) {

        this.contatoService.deleteContato(contato.$key);

        this.toastr.success(contato.nome + ' removido com sucesso.');

      }

    }

  }

}




