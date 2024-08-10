import { IEntity, IInbound, IOutbound } from '../1.entityLayer';
import { IEntity as IProduct } from '../../product/1.entityLayer';
class Gateway {
	api: IInbound;
	usecase: IOutbound;
	constructor(_api: IInbound, _usecase: IOutbound) {
		this.api = _api;
		this.usecase = _usecase;
	}
	async readAll(): Promise<IEntity[]> {
		const list: string[] = await this.api.readAll();
		const finalList = await this.usecase.readAll(list);
		return finalList;
	}
	async read(_name: string): Promise<IProduct[]> {
		console.log(_name);
		const list: IProduct[] = await this.api.read(_name);
		const finalList = await this.usecase.read(list);
		return finalList;
	}
}
export { Gateway };
