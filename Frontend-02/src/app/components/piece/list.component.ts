import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Ipiece } from '../../services/piece.model';
import { PiecesService } from '../../services/piece.service';

@Component({
  templateUrl: './list.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class PieceListComponent implements OnInit {


  pieces$: Observable<Ipiece[]> | undefined;
  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page
  constructor(private piecesService: PiecesService) {
    //
  }

  ngOnInit(): void {
    this.pieces$ = this.piecesService.GetPieces();
  }
}
