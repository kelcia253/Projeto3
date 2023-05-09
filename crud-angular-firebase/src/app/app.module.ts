import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';



import { environment } from '../environment';



import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



import { AddContatoComponent } from './contato/add-contato/add-contato.component';

import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { ListaContatoComponent } from './contato/lista-contato/lista-contato.component';



@NgModule({

  declarations: [

    AppComponent,

    AddContatoComponent,

    EditContatoComponent,

    ListaContatoComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
