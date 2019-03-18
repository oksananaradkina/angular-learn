export type TStepChar = 'x' | 'o';


export interface ICell {
  row: number;
  col: number;
  char: TStepChar;
  styleClass: string;
  doStep(step: string);
  removeClass(klass: string) ;
}



export interface IPlay {
  cells: ICell[][];
}

export interface IPlayText {
  play: boolean;
  buttonEnabled: boolean;
  message: string;
}

export interface IPlayStatus {
  WAIT: IPlayText,
  PLAY: IPlayText,
  STOP: IPlayText,
}

export const PlayStatus: IPlayStatus = {
  WAIT: {
    buttonEnabled: true,
    play: false,
    message: 'Начать игру'
  },
  PLAY: {
    buttonEnabled: false,
    play: true,
    message: 'Игра начата'
  },
  STOP: {
    buttonEnabled: true,
    play: false,
    message: 'Игра закончена'
  },
}


export interface IPlayer {
  name: string,
  win: number,
  loss: number,
  steps: Set<ICell>,
  char: TStepChar
}
