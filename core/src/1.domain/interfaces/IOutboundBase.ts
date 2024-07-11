// import { ACTION } from './../../_shared';
import { EAction } from '../enums/eAction';
interface IOutboundBase<T> {
	[EAction.CREATE](_item: T): T;
	[EAction.READ_ALL](_list: T[]): T[];
	[EAction.READ](_item: T): T;
	[EAction.UPDATE](_item: T): T;
	[EAction.DELETE](_item: T): T;
}

export type { IOutboundBase };
