import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CAKES } from 'src/app/shared/models/tab';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { CakesService } from '../services/cakes.service';
@Component({
  selector: 'app-sucres',
  templateUrl: './sucres.component.html',
  styleUrls: ['./sucres.component.css']
})
export class SucresComponent implements OnInit {
  tabCake: BiblioCakes[] = CAKES;
  constructor(private router:Router, private cakeservice:CakesService) { }

  ngOnInit(): void {
    this.tabCake=this.cakeservice.getCakes();
  }
  gotohome(){
    this.router.navigate(["/home"])
  }
  gotosales(){
    this.router.navigate(["/sales"])
  }
  ajoutPanier(b:BiblioCakes){
    this.cakeservice.ajoutePanier(b)  }
}
