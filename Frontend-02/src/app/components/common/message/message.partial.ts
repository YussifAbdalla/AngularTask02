import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'dm-message',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './message.partial.html',
  styleUrl: './message.partial.scss'
})
export class MessagePartial {
  @Input() message:string | undefined;

  constructor() {
    
  }
}
