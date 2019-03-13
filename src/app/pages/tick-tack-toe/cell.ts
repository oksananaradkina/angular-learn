export interface ICell {
  row: number;
  col: number;
  step: string;
  styleClass: string;
  doStep(step: string);
}



export interface IPlay {
  cells: ICell[][];
}

export class Cell implements ICell {
  col: number;
  row: number;
  step: string;
  styleClass: string = "cell";

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }


  doStep(step: string) {
    this.step = step;
  }
}

