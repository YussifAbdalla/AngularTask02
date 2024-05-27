import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

interface IGreeting {
  message: string;
  isMorning: boolean;
}

@Component({
  selector: 'dm-message',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './message.partial.html'
})

export class MessagePartial {

  constructor() {
    
  }

  private _isMorning: boolean = new Date().getHours() < 12;
  greeting: IGreeting = {
    message: this._isMorning ? 'Good Morning' : 'Good Afternoon',
    isMorning: this._isMorning
  };
}
