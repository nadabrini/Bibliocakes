import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CAKES } from 'src/app/shared/models/tab';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { CakesService } from '../services/cakes.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  tabCake: BiblioCakes[] = CAKES;
  constructor(private router:Router,private cakeservice:CakesService) { }

  ngOnInit(): void {
    this.tabCake=this.cakeservice.getCakes();
  }
  gotohome(){
    this.router.navigate(["/home"])
  }
  gotosucres(){
    this.router.navigate(["/sucres"])
  }
  ajoutPanier(b:BiblioCakes){
    this.cakeservice.ajoutePanier(b)  
}

}