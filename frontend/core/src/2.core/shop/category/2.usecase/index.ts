import { IEntity, IOutbound } from '../1.entity';
import { IEntity as IProduct } from '../../product/1.entity';
class Usecase implements IOutbound {
	readAll(_list: string[]): IEntity[] {
		let list = [] as IEntity[];
		_list.forEach((name) => {
			list.push({
				name,
			});
		});
		return list;
	}
	read(_list: IProduct[]): IProduct[] {
		return _list;
	}
}
export { Usecase };
