import { ICell } from '../types';


export interface IStrategy {
  getStep(variants: ICell[][], steps: Set<ICell>)
}
