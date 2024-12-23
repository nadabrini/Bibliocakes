import { Injectable } from '@angular/core';
import { CAKES } from 'src/app/shared/models/tab';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Panier } from '../shared/models/panier';
@Injectable({
  providedIn: 'root'
})
export class CakesService {
  tabCake: BiblioCakes[] = CAKES;
  tabpanier:BiblioCakes[]=Panier;
  constructor() { }
  getCakeParId(id:number):BiblioCakes {
    var l=this.tabCake.length;
    var i;
    var k=0;
    for(i=0;i<1;i++){
      if(this.tabCake[i].id==id){
        k=i;
      }
    }
    return this.tabCake[k];
  }
  getCakes() : BiblioCakes[]
  {
    return this.tabCake;
  }
  ajouterCake(name:string,description:string,choix:string,image:string,prix:number){
    var l=this.tabCake.length;
    let c=new BiblioCakes();
    c.id=this.tabCake[l-1].id+1;
    c.name=name;
    c.description=description;
    c.descVisible=true;
    c.deleted=false;
    c.choix=choix;
    c.img=image;
    c.prix=prix;
    this.tabCake.push(c);
    alert("done");
  
  }
  delete(k:number){
    this.tabCake.splice(k,1);
    alert("done")
  }
  
  ajoutePanier(b:BiblioCakes){
    this.tabpanier.push(b);
    localStorage.setItem('tabpanier', JSON.stringify(this.tabpanier));
    alert(b.name+" est ajouté au panier")
  }

  suppPanier(f:BiblioCakes){
    for(let i=0;i<this.tabpanier.length;i++){
      if (this.tabpanier[i].name==f.name){
        this.tabpanier.splice(i,1)
      }
    }
  }
  total=0;
  public totalpanier(){
    this.total=0;
    for(let i=0;i<this.tabpanier.length;i++){
      this.total=this.total+this.tabpanier[i].prix;
    }
    return this.total;
  }
  modifierCake(id:number,name:string,description:string,prix:number){
    this.getCakeParId(id).name=name;
    this.getCakeParId(id).description=description;
    this.getCakeParId(id).prix=prix;
  }
}
