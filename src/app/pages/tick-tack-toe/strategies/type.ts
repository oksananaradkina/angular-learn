import { ICell } from '../types';


export interface IStrategy {
  weight: number;
  getStep()
}
