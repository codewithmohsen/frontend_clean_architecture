import { IEntity, IInbound, IOutbound } from '../1.entity';

class Gateway implements IInbound {
	api: IInbound;
	usecase: IOutbound;
	constructor(_api: IInbound, _usecase: IOutbound) {
		this.api = _api;
		this.usecase = _usecase;
	}
	async readAll(): Promise<IEntity[]> {
		const list: IEntity[] = await this.api.readAll();

		const finalList = await this.usecase.readAll(list);
		return finalList;
	}
	async read(_id: number): Promise<IEntity> {
		const item: IEntity = await this.api.read(_id);
		const finalItem = await this.usecase.read(item);
		return finalItem;
	}
}
export { Gateway };
