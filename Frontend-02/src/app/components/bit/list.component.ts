import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Ibit } from '../../services/bit.model';
import { BitsService } from '../../services/bit.service';
@Component({

  templateUrl: './list.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class BitListComponent implements OnInit {

  bits$: Observable<Ibit[]> | undefined;
  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page
  constructor(private bitsService: BitsService) {
    //
  }

  ngOnInit(): void {
    this.bits$ = this.bitsService.GetBits();
  }
}
