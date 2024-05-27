import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Ibit } from '../../services/bit.model';
import { BitsService } from '../../services/bit.service';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html'
})

export class BitDetailsComponent implements OnInit{

  @Input() id: string;

  bit$: Observable<Ibit>;

  constructor(private bitService: BitsService) {  
  }

  ngOnInit(): void {
    this.bit$ = this.bitService.GetBit(this.id);
  }
}
