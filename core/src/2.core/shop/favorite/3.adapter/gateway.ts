import { EAction } from 'src/1.domain';
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
	// api: IInbound;
	// usecase: IOutbound;
	// constructor(_api: IInbound, _usecase: IOutbound) {
	// 	this.api = _api;
	// 	this.usecase = _usecase;
	// }
	// async readAll(): Promise<IEntity[]> {
	// 	const list: IEntity[] = await this.api.readAll();
	// 	const finalList = await this.usecase.readAll(list);
	// 	return finalList;
	// }
	// async(_id: number): Promise<IEntity> {
	// 	const item: IEntity = await this.api.read(_id);
	// 	const finalItem = await this.usecase.read(item);
	// 	return finalItem;
	// }
}
export { Gateway };
