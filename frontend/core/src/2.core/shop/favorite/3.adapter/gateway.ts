import { EAction } from '../../../../1.domain';
import { IEntity, IInbound, IOutbound } from '../1.entity';

class Gateway implements IInbound {
	api: IInbound;
	usecase: IOutbound;
	constructor(_api: IInbound, _usecase: IOutbound) {
		this.api = _api;
		this.usecase = _usecase;
	}
	async [EAction.READ](_id: number): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	async [EAction.READ_ALL](): Promise<IEntity> {
		throw new Error('Method not implemented.');
	}
	async [EAction.UPDATE](_id: number): Promise<IEntity> {
		throw new Error('Method not implemented.');
	}
}
export { Gateway };
