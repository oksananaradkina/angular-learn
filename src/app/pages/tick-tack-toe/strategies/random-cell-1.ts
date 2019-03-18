import { IStrategy } from "./type";
import { ICell, IPlayer } from '../types';
import { Strategy } from './strategy';


export class StrategyRandomCell extends Strategy implements IStrategy {

  weight = 0;

  constructor(
    protected cells: ICell[][],
    protected variants: ICell[][],
    protected playerComp: IPlayer,
    protected playerUser: IPlayer) {
    super(cells, variants, playerComp, playerUser)
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
