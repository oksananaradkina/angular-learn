import { ICell, TStepChar } from './types';

export class Cell implements ICell {
  col: number;
  row: number;
  char: TStepChar;
  styleClass: string = "cell";

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }


  doStep(step: TStepChar) {
    this.char = step;
  }
}

