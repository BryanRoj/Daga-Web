import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: any = null;

   constructor( public auth: AuthService) {

  }
  ngOnInit(): void {
    this.usuario = this.auth.getUsuario();
  }

}
