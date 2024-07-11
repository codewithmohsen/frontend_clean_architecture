// import { ACTION } from './../../_shared';

import { EAction } from '../enums/eAction';
interface IInboundBase<T> {
	[EAction.CREATE](_item: T): Promise<T>;
	[EAction.READ_ALL](): Promise<T[]>;
	[EAction.READ](_id: number): Promise<T>;
	[EAction.UPDATE](_id: number, _item: T): Promise<T>;
	[EAction.DELETE](_id: number): Promise<T>;
}

export type { IInboundBase };
