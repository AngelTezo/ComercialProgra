import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';



  jugadorHTML = true;
  peleadorHTML = false;

  jugadores()
  {
    this.jugadorHTML= true;
    this.peleadorHTML= false;
  }

  peleadores()
{
  this.jugadorHTML= false;
  this.peleadorHTML= true;
}


}
