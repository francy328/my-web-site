import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";
  titolo: string = "Accesso & autenticazione"
  sottotitolo:string = "procedi pure "

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log("onInit welcomComponent");
    this.utente = this.route.snapshot.params['userid'];
    console.log("--->"+this.utente);
  }

}
