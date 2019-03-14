import { NgModule, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IStrategy } from './strategies/type';
import { Strategy_1 } from './strategies/strategy-1';
import { IPlayer, IPlayText, PlayStatus, IPlay, ICell, TStepChar } from './types';
import { Cell } from './cell';

/**
1.


 */



@Component({
  selector: 'tick-tack-toe',
  template: `
<h1> Крестики-нолики</h1>
<h2 class="play-status">{{playStatus.message}}</h2>
<div class="game-area">
	<div class="game-field">
		<table>
			<tr *ngFor="let row of cells">
				<td *ngFor="let cell of row" [ngClass]="cell.styleClass" (click)="doStep(cell)">
					{{cell.char}}
				</td>
			</tr>
		</table>

	</div>

	<div class="info-field">
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
  </div>
</div>
<button [disabled]="!playStatus.buttonEnabled" (click)="onStartPlay($event)">Играть</button>

  `
})
export class TickTackToeComponent implements OnInit, IPlay {

  strategy: IStrategy;

  playerComp: IPlayer;
  playerUser: IPlayer;

  players: IPlayer[] = [];

  cells: ICell[][] = []

  variants: ICell[][] = []



  playStatus: IPlayText;


  onStartPlay(event: any) {
    this.playStatus = PlayStatus.PLAY;
    this.createCells();
    this.variants = this.getVariants();
  }

  ngOnInit() {
    this.playStatus = PlayStatus.WAIT;
    this.createCells();
    this.variants = this.getVariants();


    this.initPlayers();

    this.strategy = new Strategy_1(this.cells, this.playerComp.steps, this.variants);
  }

  createPlayer(name: string, char: TStepChar): IPlayer {
    return {
      name,
      char,
      win: 0,
      loss: 0,
      steps: new Set()
    }
  }

  initPlayers() {

    this.playerComp = this.createPlayer('Компьютер', 'o');
    this.playerUser = this.createPlayer('Пользователь', 'x');
    this.players.push(this.playerComp);
    this.players.push(this.playerUser);
  }

  /**
   */
  isStepAllowed(cell: ICell): boolean {

    return this.playStatus.play && Boolean(cell.char) === false;
  }

  userStep(cell: ICell) {
    cell.char = this.playerUser.char;
    this.playerUser.steps.add(cell);
  }

  doStep(cell: ICell) {

    if (this.isStepAllowed(cell) === false) {
      return;
    }

    this.userStep(cell);


    if (this.isComplete()) {

      this.playStatus = PlayStatus.STOP;
      return
    }

    this.computerStep();

    if (this.isComplete()) {

      this.playStatus = PlayStatus.STOP;
      return;
    }
  }
  computerStep() {

    const cellStep: ICell = this.strategy.getStep(this.variants, this.playerComp.steps);

    if (cellStep) {
      cellStep.char = this.playerComp.char;
      this.playerComp.steps.add(cellStep);
    }
  }

  isComplete() {
    const userComplete = this.isTheEnd('x');
    if (userComplete) {
      const completeCells = this.variants[userComplete];
      completeCells.forEach((cell: ICell) => cell.styleClass += ' complete-user');
      return true;
    }
    const compComplete = this.isTheEnd('o');
    if (compComplete) {
      const completeCells = this.variants[compComplete];
      completeCells.forEach((cell: ICell) => cell.styleClass += ' complete-comp');
      return true;
    }
    return false;
  }



  isTheEnd(char: TStepChar) {

    let completeIndex: number;

    this.variants.every((cells: ICell[], index: number) => {
      const complete = cells.filter((cell: ICell) => cell.char === char);

      if (complete.length === 3) {
        completeIndex = index;
        return false;
      }
      return true;
    })

    return completeIndex;
  }



  createCells() {
    for (let row = 0; row < 3; row++) {
      const cells: ICell[] = []
      for (let col = 0; col < 3; col++) {
        cells[col] = new Cell(row, col)
      }
      this.cells[row] = cells;
    }
  }
  getVariants() {

    const variants: ICell[][] = [];

    [0, 1, 2].forEach((row: number) => {
      const rowCells = this.getRow(row);
      variants.push(rowCells)
    });


    [0, 1, 2].forEach((col: number) => {
      const colCells = this.getCol(col);
      variants.push(colCells)
    });

    [0, 1].forEach((diag: number) => {

      const diagCells = this.getDiag(diag);
      variants.push(diagCells)
    })

    return variants;
  }

  getRow(row: number) {
    return this.cells[row];
  }

  getCol(col: number) {
    const colCells: ICell[] = [];

    [0, 1, 2].forEach((row: number) => {
      const colCell = this.cells[row][col];
      colCells.push(colCell);
    })
    return colCells;
  }

  getDiag(index: number) {

    const diagCells: ICell[] = [];

    let k1: 0 | -2;
    let k2: 1 | -1;
    switch (index) {
      case 0:
        k1 = 0;
        k2 = 1;
        break;
      case 1:
        k1 = -2;
        k2 = -1
        break;
    }


    [0, 1, 2].forEach((row: number) => {
      const col = (row + k1) * k2;
      const diagCell: ICell = this.cells[row][col];
      diagCells.push(diagCell);
    })
    return diagCells;
  }


}


@NgModule({
  declarations: [
    TickTackToeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],

})
export class TickTackToeModule { }
