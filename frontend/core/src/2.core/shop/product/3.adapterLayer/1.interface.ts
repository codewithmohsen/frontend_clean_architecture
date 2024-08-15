import { EAction, IInboundBase } from '../../../../1.domain';
import { IEntity } from '../1.entityLayer';

type IInbound = Pick<IInboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;

export type { IInbound };
