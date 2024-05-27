import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Ipiece } from '../../services/piece.model';
import { PiecesService } from '../../services/piece.service';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html'
})

export class PieceDetailsComponent implements OnInit{

  @Input() id: string;

  piece$: Observable<Ipiece>;

  constructor(private pieceService: PiecesService) {  
  }

  ngOnInit(): void {
    this.piece$ = this.pieceService.GetPiece(this.id);
    console.log(this.id)
  }
}
