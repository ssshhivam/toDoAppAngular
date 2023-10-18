import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDOComponent implements OnInit {

  // todo = {
  //   id: 1,
  //   Description: 'to do list'
  // }
  todos = [
    { id: 1, Description: 'learn java' },
    { id: 2, Description: 'learn angular' },
    { id: 3, Description: 'learn springboot' },
    { id: 4, Description: 'learn sql' }
  ]
constructor(){ }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
  

}
