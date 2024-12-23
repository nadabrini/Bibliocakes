import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estConnect=false;


  constructor(private router:Router) { }

  login(login : string,mdp:string){
    if(login=='admin' && mdp=='admin'){
      this.estConnect=true;
      this.router.navigate(['/admin']);
    }
    else {
      alert('login ou mdp est incorrect')
    }
  }

  deconnexion(){
    this.estConnect=false;
    this.router.navigate(['/login']);
  }


}
