import { EAction, IOutboundBase } from '../../../../1.domain';
import { IEntity } from './../1.entityLayer';

type IOutbound = Pick<IOutboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;

export type { IOutbound };
