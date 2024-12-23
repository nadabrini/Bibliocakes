import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/services/cakes.service';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Panier } from 'src/app/shared/models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  tabPanier:BiblioCakes[]=Panier

  constructor(private serv : CakesService,) { }

  ngOnInit(): void {
  }
  suppPanier(f:BiblioCakes){
    this.serv.suppPanier(f)

  }
  total=this.serv.totalpanier();
  

}
