import { ICell, TStepChar } from './types';

export class Cell implements ICell {
  col: number;
  row: number;
  char: TStepChar;

  private _styleClass: Set<string>;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this._styleClass = new Set();
    this.styleClass = 'cell'

  }

  set styleClass(klass: string) {
    this._styleClass.add(klass);
  }

  removeClass(klass: string) {
    this._styleClass.delete(klass);
  }

  get styleClass() {
    return Array.from(this._styleClass.values()).join(' ');
  }

  doStep(step: TStepChar) {
    this.char = step;
  }
}

