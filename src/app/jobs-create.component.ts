import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-jobs-create',
  template:
   // "y" dowolna nazwa, w kazdym miejscu musi byc taka sama 
   `
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" [(ngModel)]="y.name">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input class="form-control" [(ngModel)]="y.description">
    </div>
    <div>
      <button (click)="save()">Save</button>
    </div>
    <hr>
    <button routerLink="/">Wroc do listy</button>
    `,
  styles: [],
  
})
export class JobsCreateComponent implements OnInit {

  y = {
    
  }

  save(){
    this.http.post('http://localhost:3000/jobs/', this.y)
    .subscribe( y => {
       // po zapisaniu czyscimy formularz, aby moc dodawac nowe Xy
       this.y = {}
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
