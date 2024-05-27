import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagePartial } from './components/common/message.partial';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessagePartial],
  templateUrl: './app.component.html'
})
export class AppComponent {

  // if time is less than 12pm, show good morning, else good afternoon
  // TASK:02 create a child common component that displays the greeting message


}
