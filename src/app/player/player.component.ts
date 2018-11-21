import { JugadorService } from './../jugador/jugador.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [JugadorService]
})
export class PlayerComponent implements OnInit {

  jugadorCreate: FormGroup;
  jugadorUpdate: FormGroup;

  constructor(private jugadorS: JugadorService, formBuilder: FormBuilder) {

    this.jugadorCreate = formBuilder.group({
      Nombre: ['', Validators.required],
      Consola: ['', Validators.required],
      estado: ['1']
  });

  this.jugadorUpdate = formBuilder.group({
    idJUGADOR: [''],
    Nombre: ['', Validators.required],
    Consola: ['', Validators.required],
    estado: ['1']
});
  }

 jugadores: any[];
  createJ = true;
  updateJ = false;

  ngOnInit() {
    this.read();
  }

  read()
  {
    this.jugadorS.readJugadores()
    .subscribe(data =>
      this.jugadores = data['Jugador']
    ); 
  }
  create() {
    console.log(this.jugadorCreate.value);
    this.jugadorS.createJugador(this.jugadorCreate.value)
    .subscribe(
         product => {
            // show an alert to tell the user if product was created or not
            console.log(product);
            this.read();
         },
         error => console.log(error)
     );
  }

  selctJugador(jugador)
  {
    this.updateJ=true;
    this.createJ=false;
    this.jugadorUpdate.patchValue(jugador);
    console.log(this.jugadorUpdate.value);
   
  }

  cancelar()
  {
    this.updateJ=false;
    this.createJ=true;
  }

  update()
  {
    this.updateJ=false;
    this.createJ=true;
    console.log(this.jugadorUpdate.value);
    this.jugadorS.updateJugador(this.jugadorUpdate.value)
    .subscribe(
         product => {
            // show an alert to tell the user if product was created or not
            console.log(product);
            this.read();
         },
         error => console.log(error)
     );
  }

  delete(jugador)
  {
    console.log(jugador);
    this.jugadorS.deleteJugador(jugador)
    .subscribe(
         product => {
            // show an alert to tell the user if product was created or not
            console.log(product);
            this.read();
         },
         error => console.log(error)
     );
  }

}
