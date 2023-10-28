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
  todos=[
    new todos(1,'learn java',true,new Date()),
    new todos(2,'learn springboot',true,new Date()),
    new todos(3,'learn angular',true,new Date()),
    new todos(4,'learn sql',true,new Date())
    
  ]
constructor(){ }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


}
export class todos
  {
   constructor(
    public id:number,
    public Description:string,
    public done:boolean,
    public targetDate:Date

   ){}
  }

   
