import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralink',
  templateUrl: './paralink.component.html',
  styleUrls: ['./paralink.component.css']
})
export class ParalinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  html:string =
  "Angular is an application design https://mail.google.com/ framework and development platform for creating efficient and sophisticated single-page apps.These Angular docs help https://stackblitz.com/ you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects";

}
