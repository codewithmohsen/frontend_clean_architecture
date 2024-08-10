import { EAction } from '../enums/eAction';

export type TAction = EAction.CREATE | EAction.DELETE | EAction.READ | EAction.READ_ALL | EAction.UPDATE;
