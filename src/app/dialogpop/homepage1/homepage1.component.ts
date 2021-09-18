import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-homepage1',
  templateUrl: './homepage1.component.html',
  styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {
  name: any;
  animal: any;

  constructor(public matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(template){
   if(template){
    let dialogRef = this.matDialog.open(template, {
      width: '600px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
   }
    
  }

}
