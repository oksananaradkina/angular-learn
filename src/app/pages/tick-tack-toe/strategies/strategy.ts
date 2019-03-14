import { IStrategy } from './type';
import { ICell } from '../types';

export abstract class Strategy implements IStrategy {

  constructor(
    protected cells: ICell[][],
    protected steps: Set<ICell>,
    protected variants: ICell[][]) {

  }

  abstract getStep()


}
