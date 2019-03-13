import { NgModule, Component, OnInit } from '@angular/core';
import { IPlay, ICell, Cell } from './cell';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'tick-tack-toe',
  template: `
<table>
  <tr *ngFor="let row of cells">
    <td *ngFor="let cell of row"  [ngClass]="cell.styleClass" (click)="doStep(cell)">
      {{cell.step}}
    </td>
  </tr>
</table>
  `
})
export class TickTackToeComponent implements OnInit, IPlay {

  cells: ICell[][] = []

  variants: ICell[][] = []

  ngOnInit() {

    this.createCells();
    this.createVariants();
  }

  computerStep() {
    const emptyCells = this.getEmptyCells();
    const maxIndex = emptyCells.length - 1;
    const randomIndex = Math.round(Math.random() * maxIndex);
    const randomCell = emptyCells[randomIndex];

    randomCell.step = 'o';
  }

  getEmptyCells() {
    const emptyCells: ICell[] = [];
    this.cells.forEach((row: ICell[]) => {
      row.forEach((cell: ICell) => {
        if (!cell.step) {
          emptyCells.push(cell);
        }
      })
    })

    return emptyCells;
  }


  doStep(cell: ICell) {
    cell.doStep('x');
    if (this.isNotComplete()) {
      this.computerStep();
    }

    if (this.isNotComplete()) {

    }
  }

  isNotComplete() {
    const userComplete = this.isTheEnd('x');
    if (userComplete) {
      const completeCells = this.variants[userComplete];
      completeCells.forEach((cell: ICell) => cell.styleClass += ' complete-user');
      return false;
    }
    const compComplete = this.isTheEnd('o');
    if (compComplete) {
      const completeCells = this.variants[compComplete];
      completeCells.forEach((cell: ICell) => cell.styleClass += ' complete-comp');
      return false;
    }



    return true;
  }



  isTheEnd(step: string) {

    let completeIndex: number;

    this.variants.every((cells: ICell[], index: number) => {
      const complete = cells.filter((cell: ICell) => cell.step === step);

      if (complete.length === 3) {
        completeIndex = index;
        return false;
      }
      return true;
    })

    return completeIndex;
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



  createVariants() {
    [0, 1, 2].forEach((row: number) => {
      const rowCells = this.getRow(row);
      this.variants.push(rowCells)
    });


    [0, 1, 2].forEach((col: number) => {
      const colCells = this.getCol(col);
      this.variants.push(colCells)
    });

    [0, 1].forEach((diag: number) => {

      const diagCells = this.getDiag(diag);
      this.variants.push(diagCells)
    })
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
