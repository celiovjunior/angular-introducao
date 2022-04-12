import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Maria", type: "gato", age: 11},
    {name: "João", type: "cachorro", age: 8},
    {name: "Marta", type: "tartaruga", age: 14},
    {name: "Louro", type: "papagaio", age: 6},
  ]

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `${animal.name} tem ${animal.age} de idade.`
  }

}
