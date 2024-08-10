import { EAction, IInboundBase, IOutboundBase } from '../../../../1.domain';
import { IEntity } from './object';

type IInbound = Pick<IInboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;
type IOutbound = Pick<IOutboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;

export type { IEntity, IInbound, IOutbound };
