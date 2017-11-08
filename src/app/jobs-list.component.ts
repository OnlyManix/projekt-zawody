import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-jobs-list',
  template:
  // "x" dowolna nazwa, w kazdym miejscu musi byc taka sama 
  `
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
      <tr *ngFor="let x of list">
        <td>{{ x.name }}</td>
        <td>{{ x.description }}</td>
        <td>
          <button [routerLink]="['jobs-edit',x.id]">Edit</button>
          <button (click)="remove(x.id)">&times;</button>
        </td>
      </tr>
      <td>
      <button routerLink="jobs-create">Utworz nowy</button>
      </td>
    </table>

  `,
  styles: [],
 
})
export class JobsListComponent implements OnInit {

  // tu bedzie nasza lista:
  list

  constructor(private http: HttpClient) { }

  remove(id){
    // kasujemy element 
    this.http.delete('http://localhost:3000/jobs/'+id)
    // Gdy serwer odpowie - pobieramy jobsy ponownie aby usuniety element zniknal z listy
    .subscribe(()=> this.fetchAll())
  }

  fetchAll(){
    // tworzymy zapytanie
    this.http.get('http://localhost:3000/jobs')
    // subskrybujemy sie na wyniki - przychodzace dane przypisujemy do tablicy this.list
    .subscribe( list => this.list = list )
  }

  ngOnInit() {
    // na starcie pobieramy wszystko
    this.fetchAll()
  }

}
