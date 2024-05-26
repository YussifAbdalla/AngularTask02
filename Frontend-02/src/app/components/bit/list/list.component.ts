import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BitsService } from '../../../services/bit/bits.service';
@Component({

  templateUrl: './list.html'
  // , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class BitListComponent implements OnInit {

  bitsList: any[] = [];

  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page
  constructor(private bitsService: BitsService) {
    //
  }

  ngOnInit(): void {
    // async pipe angular rxjs
    this.bitsService.getBitsList().subscribe((data: any[]) => {
      this.bitsList = data;
    });
  }
}
