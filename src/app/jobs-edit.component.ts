import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-jobs-edit',
  template: 
  // "z" dowolna nazwa, w kazdym miejscu musi byc taka sama
  `
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" [(ngModel)]="z.name">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input class="form-control" [(ngModel)]="z.description">
    </div>
    <div>
      <button (click)="update()">Update</button>
    </div>
    <hr>
    <div>
      <button routerLink="/">Wroc do listy</button>
    </div>
  `,
  styles: [],
  
})
export class JobsEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  z = {}

  update(){    
    this.http.put('http://localhost:3000/jobs/'+ this.z['id'], this.z)
    .subscribe( z=> {
      this.z = z
    })
  }

  ngOnInit() {
    this.z['id'] = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/jobs/'+ this.z['id'])
    .subscribe( z=> {
      this.z= z
    })
  }

}
