import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password:string = "";

  titolo: string = "Accesso & autenticazione"
  sottotitolo:string = "procedi pure "

  autenticato: boolean = true;
  errMsg: string = "user o pass sbagliate";

  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
    
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId,this.password)) {
      console.log("ddd");
    }


    if (this.BasicAuth.autentica(this.userId,this.password)) {
      this.autenticato = true;
      console.log(this.autenticato);
      this.route.navigate(['welcome',this.userId]);
    }
    else{
      this.autenticato = false;
      console.log(this.autenticato);
    }
  }

}
