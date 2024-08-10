
import { IEntity } from '.';
import { EAction, IInboundBase, IOutboundBase } from '../../../../1.domain';


type IInboundTemp = Pick<IInboundBase<IEntity>, EAction.READ & EAction.READ_ALL & EAction.UPDATE>;
type IInboundOverride = Omit<IInboundTemp, EAction.READ & EAction.READ_ALL & EAction.UPDATE> & {
	[EAction.READ](_id: number): Promise<boolean>;
	[EAction.READ_ALL](): Promise<IEntity>;
	[EAction.UPDATE](_id: number): Promise<IEntity>;
};
type IOutboundTemp = Pick<IOutboundBase<IEntity>, EAction.READ & EAction.READ_ALL & EAction.UPDATE>;
type IOutboundOverride = Omit<IOutboundTemp, EAction.READ & EAction.READ_ALL & EAction.UPDATE> & {
	[EAction.READ](_item: boolean): boolean;
	[EAction.READ_ALL](_list: IEntity): IEntity;
	[EAction.UPDATE](_list: IEntity): IEntity;
};

export type { IEntity, IInboundOverride as IInbound, IOutboundOverride as IOutbound };
