import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
  <div>Hello from template TS</div>
  `,*/
  styleUrls: ['./app.component.scss']
  //styles:['div{color:red;}', '']
})
export class AppComponent {
  title = 'myangular';

  thisAppVariable:string = 'this text comes form child component'
 
}
