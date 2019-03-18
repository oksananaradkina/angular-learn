import { IStrategy } from './type';
import { ICell, IPlayer } from '../types';

export abstract class Strategy implements IStrategy {

  constructor(
    protected cells: ICell[][],
    protected variants: ICell[][],
    protected playerComp: IPlayer,
    protected playerUser: IPlayer) {

  }
  abstract weight: number;
  abstract getStep()

  getRandomCell(cells: ICell[]) {

    const maxIndex = cells.length - 1;
    const randomIndex = Math.round(Math.random() * maxIndex);
    return cells[randomIndex];
  }

  getEmptyCells(cells: ICell[][]) {

    const emptyCells: ICell[] = [];

    cells.forEach((row: ICell[]) => {
      row.forEach((cell: ICell) => {
        if (!cell.char) {
          emptyCells.push(cell);
        }
      });
    })
    return emptyCells;
  }

}
