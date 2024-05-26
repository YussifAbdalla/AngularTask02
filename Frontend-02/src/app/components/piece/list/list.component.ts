import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PiecesService } from '../../../services/piece/pieces.service';

@Component({

  templateUrl: './list.html'
  // , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class PieceListComponent implements OnInit {

  piecesList: any[] = [];

  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page
  constructor(private piecesService: PiecesService) {
    //
  }

  ngOnInit(): void {
    // async pipe angular rxjs
    this.piecesService.getPiecesList().subscribe((data: any[]) => {
      this.piecesList = data;
      console.log(this.piecesList.length)
    });
  }
}
