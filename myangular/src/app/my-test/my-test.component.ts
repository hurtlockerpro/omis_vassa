import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-my-test555',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  firstname:string = 'Vladimir'
  cars:string[] = ['audi', 'bmw', 'citroen']

  show:boolean = false
  newCarName:string = ''
  count:number = 1

  isRedSquare:boolean = true
  isGreenSquare:boolean = false

  @Input() thisChildVariable:string = ''


  constructor() { }

  ngOnInit(): void {
  }

  fnAddNewItem(x:number):void{
    //this.cars.push('new item ' + (this.cars.length + 1))
    console.log(this.newCarName)
    this.cars.push(this.newCarName)
    this.firstname = 'Sergei ' + x.toString()
  }

  fnToggle():void{
    this.show = !this.show
  }

  fnIncrement():void{
    this.count++
  }
  fnDecrement():void{
    this.count--
  }

  fnSetStyles():any{
    return {
      square: true, 
      squareRed: this.isRedSquare, 
      squareGreen: this.isGreenSquare
    }
  }

  setSquareRed():void{
    this.isRedSquare = !this.isRedSquare
    this.isGreenSquare = false
  }

  setSquareGreen():void {
    this.isGreenSquare = !this.isGreenSquare
    this.isRedSquare = false
  }
}
