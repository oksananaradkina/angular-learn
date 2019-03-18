import { IStrategy } from "./type";
import { ICell, TStepChar, IPlayer } from '../types';
import { Strategy } from './strategy';


export class StrategyTwoCompCells extends Strategy implements IStrategy {
  weight = 2;

  constructor(
    cells: ICell[][],
    variants: ICell[][],
    playerComp: IPlayer,
    playerUser: IPlayer) {

    super(cells, variants, playerComp, playerUser)
  }

  getStep() {

    const twoCells: ICell[] = this.getTwoCells();

    if (twoCells.length > 0) {
      return this.getRandomCell(twoCells);
    }

    return this.getRandomCell(this.getEmptyCells(this.cells));


  }

  getTwoCells(): ICell[] {

    const candidats: ICell[] = [];

    this.variants.forEach((cells: ICell[]) => {

      const stepCount: number = cells
        .filter((cell: ICell) => cell.char === this.playerComp.char)
        .length

      if (stepCount === 2) {
        const cell: ICell = cells.filter((cell: ICell) => !cell.char).pop();

        if (cell) {
          candidats.push(cell);
        }
      }

    })
    return candidats;
  }


}
