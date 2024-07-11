import { InferType } from 'yup';
import { EAction, IInboundBase, IOutboundBase } from '../../../../1.domain';
import { Validation } from '.';
import { IEntity as IProduct } from '../../product/1.entity';
interface IEntity extends InferType<typeof Validation> {}
type IInboundTemp = Pick<IInboundBase<IEntity>, EAction.READ & EAction.READ_ALL>;
type IInboundOverride = Omit<IInboundTemp, EAction.READ & EAction.READ_ALL> & {
	[EAction.READ](_name: string): Promise<IProduct[]>;
	[EAction.READ_ALL](): Promise<string[]>;
};
type IOutboundTemp = Pick<IOutboundBase<IEntity>, EAction.READ & EAction.READ_ALL>;
type IOutboundOverride = Omit<IOutboundTemp, EAction.READ & EAction.READ_ALL> & {
	[EAction.READ](_list: IProduct[]): IProduct[];
	[EAction.READ_ALL](_list: string[]): IEntity[];
};

export type { IEntity, IInboundOverride as IInbound, IOutboundOverride as IOutbound };
