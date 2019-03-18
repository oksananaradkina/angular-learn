import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlayer } from '../types';

/**
1.


 */



@Component({
  selector: 'players-info',
  template: `

  <h4>Игроки</h4>
  <div class="players">
    <div *ngFor="let player of players" class="player">
      <div><span class="player-property" >Имя: </span>{{player.name}}</div>
      <div><span class="player-property" >Ход: </span>{{player.char}}</div>
      <div><span class="player-property" >Выигрыши: </span>{{player.win}}</div>
      <div><span class="player-property" >Проигрыши: </span>{{player.loss}}</div>
      <div><span class="player-property" >Ходы: </span>{{player.steps.size}}</div>
    </div>
  </div>
  `
})
export class PlayersInfoComponent implements OnInit {


  @Input() players: IPlayer[];

  ngOnInit() {
  }

}

@NgModule({
  declarations: [PlayersInfoComponent],
  imports: [CommonModule],
  exports: [PlayersInfoComponent],

})
export class PlayersInfoModule { }
