import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagePartial } from './components/common/message/message.partial';

interface IGreeting {
  message: string;
  isMorning: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessagePartial],
  templateUrl: './app.component.html'
})
export class AppComponent {

  // if time is less than 12pm, show good morning, else good afternoon
  // TASK:02 create a child common component that displays the greeting message
  private _isMorning: boolean = new Date().getHours() < 12;
  greeting: IGreeting = {
    message: this._isMorning ? 'Good Morning' : 'Good Afternoon',
    isMorning: this._isMorning
  };

}
