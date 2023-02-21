import { Component } from '@angular/core';
import { of, Observable, map, from, range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //define  numbers$ as an observable
  numbers$: Observable<number>;
  constructor() {}
}
//create the array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//subscribing to the observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using map
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create an observable with an array of user objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];
//using 'from' operator
const users$ = from(users);
users$.subscribe((user) => console.log(user));

//manipulate the data written by the observable using map operator and display users in ALL CAPS and double the age

users$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age * 2,
    }))
  )
  .subscribe((user) => console.log(user));
