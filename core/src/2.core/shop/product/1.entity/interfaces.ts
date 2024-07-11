import { InferType } from 'yup';
import { EAction, IInboundBase, IOutboundBase } from '../../../../1.domain';
import { Validation } from '.';

interface IEntity extends InferType<typeof Validation> {}
type IInbound = Pick<IInboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;
type IOutbound = Pick<IOutboundBase<IEntity>, EAction.READ | EAction.READ_ALL>;

export type { IEntity, IInbound, IOutbound };
