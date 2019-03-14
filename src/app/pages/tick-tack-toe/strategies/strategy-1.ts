import { IStrategy } from "./type";
import { ICell } from '../types';
import { Strategy } from './strategy';


export class Strategy_1 extends Strategy implements IStrategy {

  constructor(protected cells: ICell[][],
    protected steps: Set<ICell>,
    protected variants: ICell[][]) {
    super(cells, steps, variants)
  }

  getStep() {
    return this.getRandomCell();
  }

  getEmptyCells() {

    const emptyCells: ICell[] = [];

    this.cells.forEach((row: ICell[]) => {
      row.forEach((cell: ICell) => {
        if (!cell.char) {
          emptyCells.push(cell);
        }
      });
    })
    return emptyCells;
  }

  getRandomCell() {
    const emptyCells = this.getEmptyCells();
    const maxIndex = emptyCells.length - 1;
    const randomIndex = Math.round(Math.random() * maxIndex);
    return emptyCells[randomIndex];
  }
}
