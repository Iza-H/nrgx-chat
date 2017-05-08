import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-messege-section',
  templateUrl: './messege-section.component.html',
  styleUrls: ['./messege-section.component.css']
})
export class MessegeSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {
    store.subscribe(
      state =>  console.log('Satte')
    );
   }

  ngOnInit() {
  }

}
